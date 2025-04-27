import { RegisterArguments } from "../../../types/custom/core.types";

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
