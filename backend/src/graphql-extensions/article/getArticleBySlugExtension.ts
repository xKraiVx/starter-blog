import { RegisterArguments } from "../../../types/custom/core.types";
import { getLocale } from "../../utils/getLocale";

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

          const { slug, locale } = args;

          const data = await strapi.services[
            "api::article.article"
          ].findOneBySlug({
            slug,
            locale: getLocale(locale),
          });

          const response = toEntityResponse(data);

          return response.value;
        },
      },
    },
  },
});
