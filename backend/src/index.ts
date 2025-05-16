import { Server } from "socket.io";
import { RegisterArguments } from "../types/custom/core.types";
import { articleBySlugExtension } from "./graphql-extensions/article/getArticleBySlugExtension";
import { getArticleCommentsExtension } from "./graphql-extensions/article/getArticleCommentsExtension";
import { createCommentExtension } from "./graphql-extensions/comment/createCommentExtension";

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
        origin: ["http://localhost:3000", "http://192.168.33.5:3000"],
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", function (socket) {
      socket.on("join", ({ username }) => {
        if (username) {
          socket.emit("welcome", {
            user: "bot",
            text: `${username}, Welcome to the group chat`,
            userData: username,
          });
        }
      });

      socket.on("sendMessage", async (data) => {
        const strapiData = {
          data: {
            user: data.user,
            message: data.message,
          },
        };

        socket.broadcast.emit("message", strapiData);
        socket.emit("message", strapiData);
      });
    });
  },
};
