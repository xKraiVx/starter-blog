import * as Types from '../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../graphql/fragments/seoForPage.generated';
import { HeroWidgetFragmentDoc } from '../../../graphql/fragments/heroWidget.generated';
import { GridWidgetFragmentDoc } from '../../../graphql/fragments/gridWidget.generated';
import { CallToActionWidgetFragmentDoc } from '../../../graphql/fragments/callToActionWidget.generated';
import { RecentPostsWidgetFragmentDoc } from '../../../graphql/fragments/recentPostsWidget.generated';
import { TextWithImageWidgetFragmentDoc } from '../../../graphql/fragments/textWithImageWidget.generated';
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
export type GetDynamicPageQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.PageFiltersInput>;
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetDynamicPageQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', title?: string | null, slug: string, documentId: string, seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null } | null> };

export type DynamicPageDataFragment = { __typename?: 'Page', title?: string | null, slug: string, documentId: string, seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null };

export type WidgetsForDynamicPage_ComponentWidgetsCallToAction_Fragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForDynamicPage_ComponentWidgetsGrid_Fragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type WidgetsForDynamicPage_ComponentWidgetsHero_Fragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForDynamicPage_ComponentWidgetsRecentPosts_Fragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type WidgetsForDynamicPage_ComponentWidgetsTextWithImage_Fragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type WidgetsForDynamicPage_Error_Fragment = { __typename?: 'Error' };

export type WidgetsForDynamicPageFragment = WidgetsForDynamicPage_ComponentWidgetsCallToAction_Fragment | WidgetsForDynamicPage_ComponentWidgetsGrid_Fragment | WidgetsForDynamicPage_ComponentWidgetsHero_Fragment | WidgetsForDynamicPage_ComponentWidgetsRecentPosts_Fragment | WidgetsForDynamicPage_ComponentWidgetsTextWithImage_Fragment | WidgetsForDynamicPage_Error_Fragment;


export const WidgetsForDynamicPageFragmentDoc = `
    fragment WidgetsForDynamicPage on PageWidgetsDynamicZone {
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
export const DynamicPageDataFragmentDoc = `
    fragment DynamicPageData on Page {
  title
  slug
  documentId
  seo {
    ...SeoForPage
  }
  widgets {
    ...WidgetsForDynamicPage
  }
}
    ${SeoForPageFragmentDoc}
${WidgetsForDynamicPageFragmentDoc}`;
export const GetDynamicPageDocument = `
    query GetDynamicPage($filters: PageFiltersInput, $locale: I18NLocaleCode) {
  pages(filters: $filters, locale: $locale) {
    ...DynamicPageData
  }
}
    ${DynamicPageDataFragmentDoc}`;

export const useGetDynamicPageQuery = <
      TData = GetDynamicPageQuery,
      TError = unknown
    >(
      variables?: GetDynamicPageQueryVariables,
      options?: Omit<UseQueryOptions<GetDynamicPageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetDynamicPageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetDynamicPageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetDynamicPage'] : ['GetDynamicPage', variables],
    queryFn: fetcher<GetDynamicPageQuery, GetDynamicPageQueryVariables>(GetDynamicPageDocument, variables),
    ...options
  }
    )};
