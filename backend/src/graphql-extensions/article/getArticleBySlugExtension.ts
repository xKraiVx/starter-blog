import { RegisterArguments } from "../../../types/custom/core.types";

export const articleBySlugExtension = ({ strapi }: RegisterArguments) => ({
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
