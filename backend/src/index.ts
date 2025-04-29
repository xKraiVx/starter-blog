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
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
