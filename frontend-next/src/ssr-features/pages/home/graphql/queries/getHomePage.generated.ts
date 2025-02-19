import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { PageBuilderWidgetsFragmentDoc } from '../../../../graphql/fragments/pageBuilderWidgets.generated';
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
export type GetHomePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePage', title?: string | null, documentId: string, widgets?: Array<{ __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsGrid', id: string, desktopColumnCount?: Types.Enum_Componentwidgetsgrid_Desktopcolumncount | null, mobileColumnCount?: Types.Enum_Componentwidgetsgrid_Mobilecolumncount | null, tabletColumnCount?: Types.Enum_Componentwidgetsgrid_Tabletcolumncount | null, title?: string | null, item?: Array<{ __typename?: 'ComponentComponentsGridItem', description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null, icon?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null> | null } | { __typename: 'ComponentWidgetsHero', id: string, title?: string | null, description?: any | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename: 'ComponentWidgetsRecentPosts', title?: string | null, postCount?: number | null, id: string, articles: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null } | null> } | { __typename: 'ComponentWidgetsTextWithImage', id: string, isImageOnLeftSide?: boolean | null, text?: any | null, title?: string | null, image?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | { __typename?: 'Error' } | null> | null } | null };



export const GetHomePageDocument = `
    query GetHomePage($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    title
    documentId
    widgets {
      ...PageBuilderWidgets
    }
  }
}
    ${PageBuilderWidgetsFragmentDoc}`;

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
    queryFn: fetcher<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, variables),
    ...options
  }
    )};
