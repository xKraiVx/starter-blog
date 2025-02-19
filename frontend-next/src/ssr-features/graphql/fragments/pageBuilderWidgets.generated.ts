import * as Types from '../../../graphql/graphql-generated-types/types';

import { HeroWidgetFragmentDoc } from './heroWidget.generated';
import { GridWidgetFragmentDoc } from './gridWidget.generated';
import { CallToActionWidgetFragmentDoc } from './callToActionWidget.generated';
import { RecentPostsWidgetFragmentDoc } from './recentPostsWidget.generated';
import { TextWithImageWidgetFragmentDoc } from './textWithImageWidget.generated';
export type PageBuilderWidgets_ComponentWidgetsCallToAction_Fragment = { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type PageBuilderWidgets_ComponentWidgetsGrid_Fragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type PageBuilderWidgets_ComponentWidgetsHero_Fragment = { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type PageBuilderWidgets_ComponentWidgetsRecentPosts_Fragment = { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> };

export type PageBuilderWidgets_ComponentWidgetsTextWithImage_Fragment = { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };

export type PageBuilderWidgets_Error_Fragment = { __typename?: 'Error' };

export type PageBuilderWidgetsFragment = PageBuilderWidgets_ComponentWidgetsCallToAction_Fragment | PageBuilderWidgets_ComponentWidgetsGrid_Fragment | PageBuilderWidgets_ComponentWidgetsHero_Fragment | PageBuilderWidgets_ComponentWidgetsRecentPosts_Fragment | PageBuilderWidgets_ComponentWidgetsTextWithImage_Fragment | PageBuilderWidgets_Error_Fragment;


export const PageBuilderWidgetsFragmentDoc = `
    fragment PageBuilderWidgets on HomePageWidgetsDynamicZone {
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