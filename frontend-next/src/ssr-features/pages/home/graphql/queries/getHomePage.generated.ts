import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { HeroWidgetFragmentDoc } from '../../../../graphql/fragments/heroWidget.generated';
import { GridWidgetFragmentDoc } from '../../../../graphql/fragments/gridWidget.generated';
import { CallToActionWidgetFragmentDoc } from '../../../../graphql/fragments/callToActionWidget.generated';
import { RecentPostsWidgetFragmentDoc } from '../../../../graphql/fragments/recentPostsWidget.generated';
import { TextWithImageWidgetFragmentDoc } from '../../../../graphql/fragments/textWithImageWidget.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetHomePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePage', title?: string | null, documentId: string, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename?: 'ComponentWidgetsTextEditor' } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null } | null };

export type HomeBuilderWidgets_ComponentWidgetsCallToAction_Fragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type HomeBuilderWidgets_ComponentWidgetsGrid_Fragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type HomeBuilderWidgets_ComponentWidgetsHero_Fragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type HomeBuilderWidgets_ComponentWidgetsRecentPosts_Fragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type HomeBuilderWidgets_ComponentWidgetsTextEditor_Fragment = { __typename?: 'ComponentWidgetsTextEditor' };

export type HomeBuilderWidgets_ComponentWidgetsTextWithImage_Fragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type HomeBuilderWidgets_Error_Fragment = { __typename?: 'Error' };

export type HomeBuilderWidgetsFragment = HomeBuilderWidgets_ComponentWidgetsCallToAction_Fragment | HomeBuilderWidgets_ComponentWidgetsGrid_Fragment | HomeBuilderWidgets_ComponentWidgetsHero_Fragment | HomeBuilderWidgets_ComponentWidgetsRecentPosts_Fragment | HomeBuilderWidgets_ComponentWidgetsTextEditor_Fragment | HomeBuilderWidgets_ComponentWidgetsTextWithImage_Fragment | HomeBuilderWidgets_Error_Fragment;


export const HomeBuilderWidgetsFragmentDoc = `
    fragment HomeBuilderWidgets on HomePageWidgetsDynamicZone {
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
export const GetHomePageDocument = `
    query GetHomePage($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    title
    documentId
    widgets {
      ...HomeBuilderWidgets
    }
  }
}
    ${HomeBuilderWidgetsFragmentDoc}`;

export const useGetHomePageQuery = <
      TData = GetHomePageQuery,
      TError = unknown
    >(
      variables?: GetHomePageQueryVariables,
      options?: Omit<UseQueryOptions<GetHomePageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetHomePageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetHomePageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetHomePage'] : ['GetHomePage', variables],
    queryFn: useFetcher<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument).bind(null, variables),
    ...options
  }
    )};
