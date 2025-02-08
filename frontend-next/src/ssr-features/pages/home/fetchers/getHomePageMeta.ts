import { ELocale } from "@/common/enums/locale.enum";
import fetcher from "@/graphql/fetcher";
import { SeoForPageFragment } from "@/ssr-features/graphql/fragments/seoForPage.generated";

import {
  GetHomePageMetaDocument,
  GetHomePageMetaQuery,
  GetHomePageMetaQueryVariables,
} from "@/ssr-features/pages/home/graphql/queries/getHomePageMeta.generated";

export const getHomePageMeta = async (
  locale: ELocale
): Promise<SeoForPageFragment | undefined | null> => {
  const data = await fetcher<
    GetHomePageMetaQuery,
    GetHomePageMetaQueryVariables
  >(GetHomePageMetaDocument, { locale })();

  return data.homePage?.seo;
};
