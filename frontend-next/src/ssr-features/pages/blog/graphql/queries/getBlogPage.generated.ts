import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { HeroWidgetFragmentDoc } from '../../../../graphql/fragments/heroWidget.generated';
import { GridWidgetFragmentDoc } from '../../../../graphql/fragments/gridWidget.generated';
import { CallToActionWidgetFragmentDoc } from '../../../../graphql/fragments/callToActionWidget.generated';
import { RecentPostsWidgetFragmentDoc } from '../../../../graphql/fragments/recentPostsWidget.generated';
import { TextWithImageWidgetFragmentDoc } from '../../../../graphql/fragments/textWithImageWidget.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL as string, {
    method: "POST",
    ...({"headers":{"content-type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
export type GetBlogPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
  pagination?: Types.InputMaybe<Types.PaginationArg>;
  filters?: Types.InputMaybe<Types.ArticleFiltersInput>;
}>;


export type GetBlogPageQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', title?: string | null, documentId: string, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null } | null, articles: Array<{ __typename?: 'Article', slug?: string | null, title?: string | null, description?: string | null, updatedAt?: any | null, cover?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number } | null } | null>, articles_connection?: { __typename?: 'ArticleEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number } } | null, categories: Array<{ __typename?: 'Category', name?: string | null, slug?: string | null } | null> };

export type BlogPageDataFragment = { __typename?: 'Blog', title?: string | null, documentId: string, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null };

export type WidgetsForBlogPage_ComponentWidgetsCallToAction_Fragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForBlogPage_ComponentWidgetsGrid_Fragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type WidgetsForBlogPage_ComponentWidgetsHero_Fragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForBlogPage_ComponentWidgetsRecentPosts_Fragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type WidgetsForBlogPage_ComponentWidgetsTextWithImage_Fragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForBlogPage_Error_Fragment = { __typename?: 'Error' };

export type WidgetsForBlogPageFragment = WidgetsForBlogPage_ComponentWidgetsCallToAction_Fragment | WidgetsForBlogPage_ComponentWidgetsGrid_Fragment | WidgetsForBlogPage_ComponentWidgetsHero_Fragment | WidgetsForBlogPage_ComponentWidgetsRecentPosts_Fragment | WidgetsForBlogPage_ComponentWidgetsTextWithImage_Fragment | WidgetsForBlogPage_Error_Fragment;

export type ArticlesForBlogPageFragment = { __typename?: 'Article', slug?: string | null, title?: string | null, description?: string | null, updatedAt?: any | null, cover?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number } | null };

export type ArticleForBlogPageCoverFragment = { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number };

export type ArticlesConnectionForBlogPageFragment = { __typename?: 'ArticleEntityResponseCollection', pageInfo: { __typename?: 'Pagination', total: number } };

export type CategoriesForBlogPageFragment = { __typename?: 'Category', name?: string | null, slug?: string | null };


export const WidgetsForBlogPageFragmentDoc = `
    fragment WidgetsForBlogPage on BlogWidgetsDynamicZone {
  ... on ComponentWidgetsHero {
    ...HeroWidget
  }
  ... on ComponentWidgetsGrid {
    ...GridWidget
  }
  ... on ComponentWidgetsCallToAction {
    ...CallToActionWidget
  }
  ... on ComponentWidgetsRecentPosts {
    ...RecentPostsWidget
  }
  ... on ComponentWidgetsTextWithImage {
    ...TextWithImageWidget
  }
}
    ${HeroWidgetFragmentDoc}
${GridWidgetFragmentDoc}
${CallToActionWidgetFragmentDoc}
${RecentPostsWidgetFragmentDoc}
${TextWithImageWidgetFragmentDoc}`;
export const BlogPageDataFragmentDoc = `
    fragment BlogPageData on Blog {
  title
  documentId
  widgets {
    ...WidgetsForBlogPage
  }
}
    ${WidgetsForBlogPageFragmentDoc}`;
export const ArticleForBlogPageCoverFragmentDoc = `
    fragment ArticleForBlogPageCover on UploadFile {
  url
  alternativeText
  size
}
    `;
export const ArticlesForBlogPageFragmentDoc = `
    fragment ArticlesForBlogPage on Article {
  slug
  title
  description
  slug
  updatedAt
  cover {
    ...ArticleForBlogPageCover
  }
}
    ${ArticleForBlogPageCoverFragmentDoc}`;
export const ArticlesConnectionForBlogPageFragmentDoc = `
    fragment ArticlesConnectionForBlogPage on ArticleEntityResponseCollection {
  pageInfo {
    total
  }
}
    `;
export const CategoriesForBlogPageFragmentDoc = `
    fragment CategoriesForBlogPage on Category {
  name
  slug
}
    `;
export const GetBlogPageDocument = `
    query GetBlogPage($locale: I18NLocaleCode, $pagination: PaginationArg, $filters: ArticleFiltersInput) {
  blog(locale: $locale) {
    ...BlogPageData
  }
  articles(locale: $locale, pagination: $pagination, filters: $filters) {
    ...ArticlesForBlogPage
  }
  articles_connection(locale: $locale, pagination: $pagination, filters: $filters) {
    ...ArticlesConnectionForBlogPage
  }
  categories {
    ...CategoriesForBlogPage
  }
}
    ${BlogPageDataFragmentDoc}
${ArticlesForBlogPageFragmentDoc}
${ArticlesConnectionForBlogPageFragmentDoc}
${CategoriesForBlogPageFragmentDoc}`;

export const useGetBlogPageQuery = <
      TData = GetBlogPageQuery,
      TError = unknown
    >(
      variables?: GetBlogPageQueryVariables,
      options?: Omit<UseQueryOptions<GetBlogPageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetBlogPageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetBlogPageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetBlogPage'] : ['GetBlogPage', variables],
    queryFn: fetcher<GetBlogPageQuery, GetBlogPageQueryVariables>(GetBlogPageDocument, variables),
    ...options
  }
    )};
