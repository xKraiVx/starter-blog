import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import { SeoForPageFragment } from "@/ssr-features/graphql/fragments/seoForPage.generated";
import {
  GetAboutPageMetaDocument,
  GetAboutPageMetaQuery,
  GetAboutPageMetaQueryVariables,
} from "@/ssr-features/pages/about/graphql/queries/getAboutPageMeta.generated";

export const getAboutPageMeta = async (
  locale: ELocale
): Promise<SeoForPageFragment | undefined | null> => {
  const data = await fetcher<
    GetAboutPageMetaQuery,
    GetAboutPageMetaQueryVariables
  >(GetAboutPageMetaDocument, { locale })();

  return data.about?.seo;
};
