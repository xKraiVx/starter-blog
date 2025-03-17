import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import { SeoForPageFragment } from "@/ssr-features/graphql/fragments/seoForPage.generated";
import {
  GetBlogPageMetaDocument,
  GetBlogPageMetaQuery,
  GetBlogPageMetaQueryVariables,
} from "@/ssr-features/pages/blog/graphql/queries/getBlogPageMeta.generated";

export const getBlogPageMeta = async (
  locale: ELocale
): Promise<SeoForPageFragment | undefined | null> => {
  const data = await fetcher<
    GetBlogPageMetaQuery,
    GetBlogPageMetaQueryVariables
  >(GetBlogPageMetaDocument, { locale })();

  return data.blog?.seo;
};
