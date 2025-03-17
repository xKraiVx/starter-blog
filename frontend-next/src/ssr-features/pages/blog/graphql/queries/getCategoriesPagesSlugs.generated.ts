import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetCategoriesPagesSlugsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetCategoriesPagesSlugsQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', slug?: string | null } | null> };

export type CategoryForArticlesPagesSlugsFragment = { __typename?: 'Category', slug?: string | null };


export const CategoryForArticlesPagesSlugsFragmentDoc = `
    fragment CategoryForArticlesPagesSlugs on Category {
  slug
}
    `;
export const GetCategoriesPagesSlugsDocument = `
    query GetCategoriesPagesSlugs($locale: I18NLocaleCode) {
  categories(locale: $locale) {
    ...CategoryForArticlesPagesSlugs
  }
}
    ${CategoryForArticlesPagesSlugsFragmentDoc}`;

export const useGetCategoriesPagesSlugsQuery = <
      TData = GetCategoriesPagesSlugsQuery,
      TError = unknown
    >(
      variables?: GetCategoriesPagesSlugsQueryVariables,
      options?: Omit<UseQueryOptions<GetCategoriesPagesSlugsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCategoriesPagesSlugsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetCategoriesPagesSlugsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetCategoriesPagesSlugs'] : ['GetCategoriesPagesSlugs', variables],
    queryFn: useFetcher<GetCategoriesPagesSlugsQuery, GetCategoriesPagesSlugsQueryVariables>(GetCategoriesPagesSlugsDocument).bind(null, variables),
    ...options
  }
    )};
