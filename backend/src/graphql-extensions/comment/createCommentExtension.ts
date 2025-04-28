import { RegisterArguments } from "../../../types/custom/core.types";
import { getLocale } from "../../utils/getLocale";

export const createCommentExtension = ({ strapi }: RegisterArguments) => ({
  typeDefs: `
      input CommentBySlugInput {
        text: String!
        articleSlug: String!
      }

      type Mutation {
        createComment(data: CommentBySlugInput!): Comment
      }
    `,
  resolvers: {
    Mutation: {
      createComment: {
        resolve: async (parent, args, context) => {
          const { toEntityResponse } = strapi.service(
            "plugin::graphql.format"
          ).returnTypes;

          const { articleSlug, text } = args.data;
          const user = context.state.user;

          //TODO: Make for all locales (now just for the default locale)
          const articlesData = await strapi.services[
            "api::article.article"
          ].findOneBySlug({
            slug: articleSlug,
            locale: getLocale(),
          });

          const article = articlesData.results[0];

          const commentData = await strapi.services[
            "api::comment.comment"
          ].create({
            data: {
              text,
              article,
              author: user,
            },
          });

          const response = toEntityResponse(commentData);

          return response.value;
        },
      },
    },
  },
});
