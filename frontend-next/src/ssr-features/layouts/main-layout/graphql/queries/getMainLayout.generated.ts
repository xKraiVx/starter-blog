import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetMainLayoutDataQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetMainLayoutDataQuery = { __typename?: 'Query', footer?: { __typename?: 'Footer', rights?: string | null, socials?: Array<{ __typename?: 'ComponentComponentsSosialLink', id: string, url: string, icon: Types.Enum_Componentcomponentssosiallink_Icon } | null> | null } | null };

export type FooterForMainLayoutFragment = { __typename?: 'Footer', rights?: string | null, socials?: Array<{ __typename?: 'ComponentComponentsSosialLink', id: string, url: string, icon: Types.Enum_Componentcomponentssosiallink_Icon } | null> | null };

export type SocialForeMainLayoutFragment = { __typename?: 'ComponentComponentsSosialLink', id: string, url: string, icon: Types.Enum_Componentcomponentssosiallink_Icon };


export const SocialForeMainLayoutFragmentDoc = `
    fragment SocialForeMainLayout on ComponentComponentsSosialLink {
  id
  url
  icon
}
    `;
export const FooterForMainLayoutFragmentDoc = `
    fragment FooterForMainLayout on Footer {
  rights
  socials {
    ...SocialForeMainLayout
  }
}
    ${SocialForeMainLayoutFragmentDoc}`;
export const GetMainLayoutDataDocument = `
    query GetMainLayoutData($locale: I18NLocaleCode) {
  footer(locale: $locale) {
    ...FooterForMainLayout
  }
}
    ${FooterForMainLayoutFragmentDoc}`;

export const useGetMainLayoutDataQuery = <
      TData = GetMainLayoutDataQuery,
      TError = unknown
    >(
      variables?: GetMainLayoutDataQueryVariables,
      options?: Omit<UseQueryOptions<GetMainLayoutDataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetMainLayoutDataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetMainLayoutDataQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetMainLayoutData'] : ['GetMainLayoutData', variables],
    queryFn: useFetcher<GetMainLayoutDataQuery, GetMainLayoutDataQueryVariables>(GetMainLayoutDataDocument).bind(null, variables),
    ...options
  }
    )};
