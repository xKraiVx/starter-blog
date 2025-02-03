import fetcher from "@/graphql/fetcher";
import {
  ArticleForArticlePageFragment,
  GetArticlePageDocument,
  GetArticlePageQuery,
  GetArticlePageQueryVariables,
} from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";

export const getArticlePage = async (
  locale: string,
  slug: string
): Promise<ArticleForArticlePageFragment | null> => {
  const data = await fetcher<GetArticlePageQuery, GetArticlePageQueryVariables>(
    GetArticlePageDocument,
    {
      locale,
      filters: {
        slug: {
          eq: slug,
        },
      },
    }
  )();

  return data.articles[0];
};
