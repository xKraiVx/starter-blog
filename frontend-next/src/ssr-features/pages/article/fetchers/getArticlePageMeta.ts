import fetcher from "@/graphql/fetcher";
import { SeoForPageFragment } from "@/ssr-features/graphql/fragments/seoForPage.generated";

import {
  GetArticlePageMetaDocument,
  GetArticlePageMetaQuery,
  GetArticlePageMetaQueryVariables,
} from "@/ssr-features/pages/article/graphql/queries/getArticlePageMeta.generated";

export const getArticlePageMeta = async (
  locale: string,
  slug: string
): Promise<SeoForPageFragment | undefined | null> => {
  const data = await fetcher<
    GetArticlePageMetaQuery,
    GetArticlePageMetaQueryVariables
  >(GetArticlePageMetaDocument, {
    locale,
    slug,
  })();

  return data.article?.seo;
};
