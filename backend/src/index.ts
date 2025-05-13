import { Server } from "socket.io";
import { RegisterArguments } from "../types/custom/core.types";
import { articleBySlugExtension } from "./graphql-extensions/article/getArticleBySlugExtension";
import { getArticleCommentsExtension } from "./graphql-extensions/article/getArticleCommentsExtension";
import { createCommentExtension } from "./graphql-extensions/comment/createCommentExtension";
import { Core } from "@strapi/strapi";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: RegisterArguments) {
    const extensionService = strapi.plugin("graphql").service("extension");

    //Article extensions
    extensionService.use(articleBySlugExtension);
    extensionService.use(getArticleCommentsExtension);
    //Comment extensions
    extensionService.use(createCommentExtension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: RegisterArguments) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", function (socket) {
      socket.on("join", ({ username }) => {
        console.log("user connected");
        console.log("username is ", username);
        if (username) {
          socket.join("group");
          socket.emit("welcome", {
            user: "bot",
            text: `${username}, Welcome to the group chat`,
            userData: username,
          });
        } else {
          console.log("An error occurred");
        }
      });

      socket.on("sendMessage", async (data) => {
        const axios = require("axios");
        const strapiData = {
          data: {
            user: data.user,
            message: data.message,
          },
        };

        socket.emit("message", strapiData);

        // try {
        //   strapi
        //     .documents("api::chat-messages.chat-messages")
        //     .create(strapiData);
        // } catch (e) {
        //   console.log("error:", e.message);
        // }

        await axios
          .post("http://localhost:1337/api/chat-messages", strapiData)
          .then(() => {
            socket.broadcast.emit("message", {
              user: data.username,
              text: data.message,
            });
          })
          .catch((e) => console.log("error", e.message));
      });
    });
  },
};
