import * as Types from '../../../graphql/graphql-generated-types/types';

export type GridWidgetFragment = { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null };

export type GridItemFragment = { __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null };


export const GridItemFragmentDoc = `
    fragment GridItem on ComponentComponentsGridItem {
  backgroundImage {
    size
    url
    alternativeText
  }
  description
  icon {
    size
    url
    alternativeText
  }
  id
  title
}
    `;
export const GridWidgetFragmentDoc = `
    fragment GridWidget on ComponentWidgetsGrid {
  __typename
  id
  desktopColumnCount
  mobileColumnCount
  tabletColumnCount
  title
  item {
    ...GridItem
  }
}
    ${GridItemFragmentDoc}`;