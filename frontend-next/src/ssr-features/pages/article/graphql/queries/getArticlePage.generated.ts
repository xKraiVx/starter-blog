import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
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
    query GetArticlePage($slug: String!, $locale: I18NLocaleCode) {
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
    queryKey: ['GetArticlePage', variables],
    queryFn: useFetcher<GetArticlePageQuery, GetArticlePageQueryVariables>(GetArticlePageDocument).bind(null, variables),
    ...options
  }
    )};
