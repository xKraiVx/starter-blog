import { ELocale } from "@/common/enums/locale.enum";
import fetcher from "@/graphql/fetcher";
import {
  DynamicPagesSlugsDocument,
  DynamicPagesSlugsQuery,
  DynamicPagesSlugsQueryVariables,
} from "@/ssr-features/pages/dynamic-pages/graphql/queries/getDymanicPagesSlugs.generated";

export const getDynamicPagesSlugs = async (
  locale: ELocale
): Promise<string[]> => {
  const data = await fetcher<
    DynamicPagesSlugsQuery,
    DynamicPagesSlugsQueryVariables
  >(DynamicPagesSlugsDocument, { locale })();

  return data.pages.reduce((acc, page) => {
    if (page) {
      acc.push(page.slug);
    }
    return acc;
  }, [] as string[]);
};
