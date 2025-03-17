import { fetcher } from "@/graphql/fetcher";

import {
  GetArticlesPagesSlugsDocument,
  GetArticlesPagesSlugsQuery,
  GetArticlesPagesSlugsQueryVariables,
} from "@/ssr-features/pages/article/graphql/queries/getArticlesPagesSlugs.generated";

export const getArticlesPagesSlugs = async (
  locale: string
): Promise<string[]> => {
  const data = await fetcher<
    GetArticlesPagesSlugsQuery,
    GetArticlesPagesSlugsQueryVariables
  >(GetArticlesPagesSlugsDocument, {
    locale,
  })();

  return data.articles.reduce<string[]>((acc, article) => {
    if (article?.slug) {
      acc.push(article.slug);
    }

    return acc;
  }, []);
};
