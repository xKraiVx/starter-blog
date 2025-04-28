/**
 * article service.
 */

import { factories } from "@strapi/strapi";
import { getLocale } from "../../../utils/getLocale";
interface FindOneBySlugParams {
  slug: string;
  locale?: string;
}

interface FindArticleCommentsParams extends FindOneBySlugParams {
  userId?: string;
}

export default factories.createCoreService(
  "api::article.article",
  ({ strapi }) => ({
    async findOneBySlug({ slug, locale }: FindOneBySlugParams) {
      const { toEntityResponse } = strapi.service(
        "plugin::graphql.format"
      ).returnTypes;

      const data = await strapi.services["api::article.article"].find({
        filters: { locale: getLocale(locale), slug },
        populate: {
          comments: {
            populate: "*",
          },
        },
      });

      const response = toEntityResponse(data.results[0]);

      return response.value;
    },
    async findArticleComments({
      slug,
      locale,
      userId,
    }: FindArticleCommentsParams) {
      const { toEntityResponse } = strapi.service(
        "plugin::graphql.format"
      ).returnTypes;

      const data = await strapi.services["api::article.article"].find({
        filters: { locale: getLocale(locale), slug },
        populate: {
          comments: {
            populate: "*",
          },
        },
      });

      const formattedComments = data.results[0]?.comments.map((comment) => {
        const isMyComment = comment.author?.id === userId;

        return {
          ...comment,
          isMyComment,
        };
      });

      const response = toEntityResponse(formattedComments);

      return response.value;
    },
  })
);
