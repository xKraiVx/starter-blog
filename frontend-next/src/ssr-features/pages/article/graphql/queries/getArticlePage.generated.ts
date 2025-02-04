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
export type GetArticlePageQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetArticlePageQuery = { __typename?: 'Query', article?: { __typename?: 'Article', slug?: string | null, title?: string | null } | null };

export type ArticleForArticlePageFragment = { __typename?: 'Article', slug?: string | null, title?: string | null };


export const ArticleForArticlePageFragmentDoc = `
    fragment ArticleForArticlePage on Article {
  slug
  title
}
    `;
export const GetArticlePageDocument = `
    query getArticlePage($slug: String!, $locale: I18NLocaleCode) {
  article(slug: $slug, locale: $locale) {
    ...ArticleForArticlePage
  }
}
    ${ArticleForArticlePageFragmentDoc}`;

export const useGetArticlePageQuery = <
      TData = GetArticlePageQuery,
      TError = unknown
    >(
      variables: GetArticlePageQueryVariables,
      options?: Omit<UseQueryOptions<GetArticlePageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetArticlePageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetArticlePageQuery, TError, TData>(
      {
    queryKey: ['getArticlePage', variables],
    queryFn: fetcher<GetArticlePageQuery, GetArticlePageQueryVariables>(GetArticlePageDocument, variables),
    ...options
  }
    )};
