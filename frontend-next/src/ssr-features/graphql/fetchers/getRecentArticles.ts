import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import { RecentPostsWidgetFragment } from "@/ssr-features/graphql/fragments/recentPostsWidget.generated";
import {
  GetRecentArticlesDocument,
  GetRecentArticlesQuery,
  GetRecentArticlesQueryVariables,
} from "@/ssr-features/graphql/queries/getRecentArticles.generated";

export const getRecentArticles = async (
  locale: string,
  recentPostWidget: RecentPostsWidgetFragment
): Promise<GetRecentArticlesQuery> => {
  const recentArticles = await fetcher<
    GetRecentArticlesQuery,
    GetRecentArticlesQueryVariables
  >(GetRecentArticlesDocument, {
    locale,
    pagination: {
      page: 1,
      pageSize: recentPostWidget.postCount || 5,
    },
  })();

  return recentArticles;
};
