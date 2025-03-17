import { fetcher } from "@/graphql/fetcher";

import {
  GetCategoriesPagesSlugsDocument,
  GetCategoriesPagesSlugsQuery,
  GetCategoriesPagesSlugsQueryVariables,
} from "@/ssr-features/pages/blog/graphql/queries/getCategoriesPagesSlugs.generated";

export const getCategoriesPagesSlugs = async (
  locale: string
): Promise<string[]> => {
  const data = await fetcher<
    GetCategoriesPagesSlugsQuery,
    GetCategoriesPagesSlugsQueryVariables
  >(GetCategoriesPagesSlugsDocument, {
    locale,
  })();

  return data.categories.reduce<string[]>((acc, category) => {
    if (category?.slug) {
      acc.push(category.slug);
    }

    return acc;
  }, []);
};
