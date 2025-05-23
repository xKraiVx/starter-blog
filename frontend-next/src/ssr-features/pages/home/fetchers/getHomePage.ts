import { ELocale } from "@/common/enums/locale.enum";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { fetcher } from "@/graphql/fetcher";
import { getRecentArticles } from "@/ssr-features/graphql/fetchers/getRecentArticles";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";

import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";

type TGetHomePageReturn = Promise<{
  data: GetHomePageQuery;
  recentArticles?: GetRecentArticlesQuery;
}>;

export const getHomePage = async (locale: ELocale): TGetHomePageReturn => {
  const data = await fetcher<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    { locale }
  )();

  const recentPostWidget = data.homePage?.widgets?.find(
    (widget) => widget?.__typename === EPageBuilderWidget.ResentPosts
  );

  if (recentPostWidget) {
    const recentArticles = await getRecentArticles(locale, recentPostWidget);

    return {
      data,
      recentArticles,
    };
  }

  return { data };
};
