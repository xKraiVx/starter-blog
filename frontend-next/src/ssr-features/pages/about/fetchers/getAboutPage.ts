import { ELocale } from "@/common/enums/locale.enum";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { fetcher } from "@/graphql/fetcher";
import {
  GetRecentArticlesDocument,
  GetRecentArticlesQuery,
  GetRecentArticlesQueryVariables,
} from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import {
  GetAboutPageDocument,
  GetAboutPageQuery,
  GetAboutPageQueryVariables,
} from "@/ssr-features/pages/about/graphql/queries/getAboutPage.generated";

type TGetAboutPageReturn = Promise<{
  data: GetAboutPageQuery;
  recentArticles?: GetRecentArticlesQuery;
}>;

export const getAboutPage = async (locale: ELocale): TGetAboutPageReturn => {
  const data = await fetcher<GetAboutPageQuery, GetAboutPageQueryVariables>(
    GetAboutPageDocument,
    { locale }
  )();

  const recentPostWidget = data.about?.widgets?.find(
    (widget) => widget?.__typename === EPageBuilderWidget.ResentPosts
  );

  if (recentPostWidget) {
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

    return {
      data,
      recentArticles,
    };
  }

  return { data };
};
