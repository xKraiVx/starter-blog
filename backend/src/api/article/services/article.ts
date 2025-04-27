/**
 * article service.
 */

import { factories } from "@strapi/strapi";
interface FindOneBySlugParams {
  slug: string;
  locale?: string;
}

export default factories.createCoreService(
  "api::article.article",
  ({ strapi }) => ({
    async findOneBySlug({ slug, locale }: FindOneBySlugParams) {
      const { toEntityResponse } = strapi.service(
        "plugin::graphql.format"
      ).returnTypes;

      const data = await strapi.services["api::article.article"].find({
        filters: { locale: locale || "en", slug },
        populate: {
          comments: {
            populate: "*",
          },
        },
      });

      const response = toEntityResponse(data.results[0]);

      return response.value;
    },
  })
);
