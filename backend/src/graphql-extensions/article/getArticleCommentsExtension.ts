import { RegisterArguments } from "../../../types/custom/core.types";
import { getLocale } from "../../utils/getLocale";

export const getArticleCommentsExtension = ({ strapi }: RegisterArguments) => ({
  typeDefs: `
      extend type Comment {
        isMyComment: Boolean!
      }

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
          ].findArticleComments({
            slug,
            locale: getLocale(locale),
            userId: context.state.user?.id,
          });

          const response = toEntityResponse(data);

          return response.value;
        },
      },
    },
  },
});
