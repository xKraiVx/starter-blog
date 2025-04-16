import { TMaybe } from "@/common/types/general-types.type";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { fetcher } from "@/graphql/fetcher";
import { getRecentArticles } from "@/ssr-features/graphql/fetchers/getRecentArticles";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import {
  ArticleForArticlePageFragment,
  GetArticlePageDocument,
  GetArticlePageQuery,
  GetArticlePageQueryVariables,
} from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";

type TGetArticlePageReturn = Promise<{
  data: TMaybe<ArticleForArticlePageFragment>;
  recentArticles?: GetRecentArticlesQuery;
}>;

export const getArticlePage = async (
  locale: string,
  slug: string
): Promise<TGetArticlePageReturn> => {
  const data = await fetcher<GetArticlePageQuery, GetArticlePageQueryVariables>(
    GetArticlePageDocument,
    {
      locale,
      slug,
    }
  )();

  const recentPostWidget = data.article?.widgets?.find(
    (widget) => widget?.__typename === EPageBuilderWidget.ResentPosts
  );

  if (recentPostWidget) {
    const recentArticles = await getRecentArticles(locale, recentPostWidget);

    return {
      data: data.article,
      recentArticles,
    };
  }

  return {
    data: data.article,
  };
};
