import type { Core } from "@strapi/strapi";
import { text } from "stream/consumers";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    const articleBySlugExtension = ({ nexus }) => ({
      typeDefs: `
        type Query {
          article(slug: String!, documentId: ID): Article
        }
      `,
      resolvers: {
        Query: {
          article: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::article.article"].find({
                filters: { slug: args.slug, locale: args.locale || "en" },
              });

              const response = toEntityResponse(data.results[0]);

              return response.value;
            },
          },
        },
      },
    });

    extensionService.use(articleBySlugExtension);

    const getArticleCommentsExtension = ({ nexus }) => ({
      typeDefs: `
        type Query {
          getArticleComments(slug: String!): [Comment]!
        }
      `,
      resolvers: {
        Query: {
          getArticleComments: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              const data = await strapi.services["api::article.article"].find({
                filters: { slug: args.slug, locale: args.locale || "en" },
                populate: {
                  comments: {
                    populate: "*",
                  },
                },
              });

              const response = toEntityResponse(data.results[0].comments);

              return response.value;
            },
          },
        },
      },
    });

    extensionService.use(getArticleCommentsExtension);
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
