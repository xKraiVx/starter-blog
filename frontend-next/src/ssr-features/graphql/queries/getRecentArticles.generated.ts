import * as Types from '../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetRecentArticlesQueryVariables = Types.Exact<{
  pagination?: Types.InputMaybe<Types.PaginationArg>;
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetRecentArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'Article', slug?: string | null, title?: string | null, description?: string | null, updatedAt?: any | null, cover?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number } | null } | null> };

export type ArticleForRecentArticlesWidgetFragment = { __typename?: 'Article', slug?: string | null, title?: string | null, description?: string | null, updatedAt?: any | null, cover?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number } | null };

export type ArticleCoverFragment = { __typename?: 'UploadFile', url: string, alternativeText?: string | null, size: number };


export const ArticleCoverFragmentDoc = `
    fragment ArticleCover on UploadFile {
  url
  alternativeText
  size
}
    `;
export const ArticleForRecentArticlesWidgetFragmentDoc = `
    fragment ArticleForRecentArticlesWidget on Article {
  slug
  title
  description
  slug
  updatedAt
  cover {
    ...ArticleCover
  }
}
    ${ArticleCoverFragmentDoc}`;
export const GetRecentArticlesDocument = `
    query GetRecentArticles($pagination: PaginationArg, $locale: I18NLocaleCode) {
  articles(pagination: $pagination, locale: $locale) {
    ...ArticleForRecentArticlesWidget
  }
}
    ${ArticleForRecentArticlesWidgetFragmentDoc}`;

export const useGetRecentArticlesQuery = <
      TData = GetRecentArticlesQuery,
      TError = unknown
    >(
      variables?: GetRecentArticlesQueryVariables,
      options?: Omit<UseQueryOptions<GetRecentArticlesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetRecentArticlesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetRecentArticlesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetRecentArticles'] : ['GetRecentArticles', variables],
    queryFn: useFetcher<GetRecentArticlesQuery, GetRecentArticlesQueryVariables>(GetRecentArticlesDocument).bind(null, variables),
    ...options
  }
    )};
