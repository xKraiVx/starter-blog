import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type DynamicPagesSlugsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type DynamicPagesSlugsQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', slug: string } | null> };



export const DynamicPagesSlugsDocument = `
    query DynamicPagesSlugs($locale: I18NLocaleCode) {
  pages(locale: $locale) {
    slug
  }
}
    `;

export const useDynamicPagesSlugsQuery = <
      TData = DynamicPagesSlugsQuery,
      TError = unknown
    >(
      variables?: DynamicPagesSlugsQueryVariables,
      options?: Omit<UseQueryOptions<DynamicPagesSlugsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<DynamicPagesSlugsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<DynamicPagesSlugsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['DynamicPagesSlugs'] : ['DynamicPagesSlugs', variables],
    queryFn: useFetcher<DynamicPagesSlugsQuery, DynamicPagesSlugsQueryVariables>(DynamicPagesSlugsDocument).bind(null, variables),
    ...options
  }
    )};
