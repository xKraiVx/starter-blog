import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import {
  DynamicPageDataFragment,
  GetDynamicPageDocument,
  GetDynamicPageQuery,
  GetDynamicPageQueryVariables,
} from "@/ssr-features/pages/dynamic-pages/graphql/queries/getDynamicPage.generated";

export const getDynamicPage = async (
  locale: ELocale,
  slug: string
): Promise<DynamicPageDataFragment | null> => {
  const { pages } = await fetcher<
    GetDynamicPageQuery,
    GetDynamicPageQueryVariables
  >(GetDynamicPageDocument, { filters: { slug: { eq: slug } }, locale })();

  const data = pages[0];

  return data;
};
