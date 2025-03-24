import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { HeroWidgetFragmentDoc } from '../../../../graphql/fragments/heroWidget.generated';
import { GridWidgetFragmentDoc } from '../../../../graphql/fragments/gridWidget.generated';
import { CallToActionWidgetFragmentDoc } from '../../../../graphql/fragments/callToActionWidget.generated';
import { RecentPostsWidgetFragmentDoc } from '../../../../graphql/fragments/recentPostsWidget.generated';
import { TextWithImageWidgetFragmentDoc } from '../../../../graphql/fragments/textWithImageWidget.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetAboutPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetAboutPageQuery = { __typename?: 'Query', about?: { __typename?: 'About', title?: string | null, documentId: string, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null } | null };

export type AboutPageBuilderWidgets_ComponentWidgetsCallToAction_Fragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type AboutPageBuilderWidgets_ComponentWidgetsGrid_Fragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type AboutPageBuilderWidgets_ComponentWidgetsHero_Fragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type AboutPageBuilderWidgets_ComponentWidgetsRecentPosts_Fragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type AboutPageBuilderWidgets_ComponentWidgetsTextWithImage_Fragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type AboutPageBuilderWidgets_Error_Fragment = { __typename?: 'Error' };

export type AboutPageBuilderWidgetsFragment = AboutPageBuilderWidgets_ComponentWidgetsCallToAction_Fragment | AboutPageBuilderWidgets_ComponentWidgetsGrid_Fragment | AboutPageBuilderWidgets_ComponentWidgetsHero_Fragment | AboutPageBuilderWidgets_ComponentWidgetsRecentPosts_Fragment | AboutPageBuilderWidgets_ComponentWidgetsTextWithImage_Fragment | AboutPageBuilderWidgets_Error_Fragment;


export const AboutPageBuilderWidgetsFragmentDoc = `
    fragment AboutPageBuilderWidgets on AboutWidgetsDynamicZone {
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
export const GetAboutPageDocument = `
    query GetAboutPage($locale: I18NLocaleCode) {
  about(locale: $locale) {
    title
    documentId
    widgets {
      ...AboutPageBuilderWidgets
    }
  }
}
    ${AboutPageBuilderWidgetsFragmentDoc}`;

export const useGetAboutPageQuery = <
      TData = GetAboutPageQuery,
      TError = unknown
    >(
      variables?: GetAboutPageQueryVariables,
      options?: Omit<UseQueryOptions<GetAboutPageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAboutPageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAboutPageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAboutPage'] : ['GetAboutPage', variables],
    queryFn: useFetcher<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument).bind(null, variables),
    ...options
  }
    )};
