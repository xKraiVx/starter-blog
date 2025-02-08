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
export type GetArticlesPagesSlugsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetArticlesPagesSlugsQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug?: string | null } | null> };

export type ArticleForArticlesPagesSlugsFragment = { __typename?: 'Article', slug?: string | null };


export const ArticleForArticlesPagesSlugsFragmentDoc = `
    fragment ArticleForArticlesPagesSlugs on Article {
  slug
}
    `;
export const GetArticlesPagesSlugsDocument = `
    query GetArticlesPagesSlugs($locale: I18NLocaleCode) {
  articles(locale: $locale) {
    ...ArticleForArticlesPagesSlugs
  }
}
    ${ArticleForArticlesPagesSlugsFragmentDoc}`;

export const useGetArticlesPagesSlugsQuery = <
      TData = GetArticlesPagesSlugsQuery,
      TError = unknown
    >(
      variables?: GetArticlesPagesSlugsQueryVariables,
      options?: Omit<UseQueryOptions<GetArticlesPagesSlugsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetArticlesPagesSlugsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetArticlesPagesSlugsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetArticlesPagesSlugs'] : ['GetArticlesPagesSlugs', variables],
    queryFn: fetcher<GetArticlesPagesSlugsQuery, GetArticlesPagesSlugsQueryVariables>(GetArticlesPagesSlugsDocument, variables),
    ...options
  }
    )};
