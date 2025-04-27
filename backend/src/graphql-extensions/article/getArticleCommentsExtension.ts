import { RegisterArguments } from "../../../types/custom/core.types";
import { castToArray } from "../../utils/castToArray";

export const getArticleCommentsExtension = ({ strapi }: RegisterArguments) => ({
  typeDefs: `
      type Query {
        getArticleComments(slug: String!): [Comment]!
      }
    `,
  resolvers: {
    Query: {
      getArticleComments: {
        resolve: async (parent, args, context) => {
          const { slug, locale } = args;

          const { toEntityResponse } = strapi.service(
            "plugin::graphql.format"
          ).returnTypes;

          const data = await strapi.services[
            "api::article.article"
          ].findOneBySlug({
            slug,
            locale: locale || "en",
          });

          const response = toEntityResponse(castToArray(data?.comments));

          return response.value;
        },
      },
    },
  },
});
