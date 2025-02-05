import * as Types from '../../../../../graphql/graphql-generated-types/types';

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
    query getCategoriesPagesSlugs($locale: I18NLocaleCode) {
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
    queryKey: variables === undefined ? ['getCategoriesPagesSlugs'] : ['getCategoriesPagesSlugs', variables],
    queryFn: fetcher<GetCategoriesPagesSlugsQuery, GetCategoriesPagesSlugsQueryVariables>(GetCategoriesPagesSlugsDocument, variables),
    ...options
  }
    )};
