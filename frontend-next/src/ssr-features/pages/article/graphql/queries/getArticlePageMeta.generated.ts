import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../../graphql/fragments/seoForPage.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetArticlePageMetaQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']['input'];
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetArticlePageMetaQuery = { __typename?: 'Query', article?: { __typename?: 'Article', seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };



export const GetArticlePageMetaDocument = `
    query GetArticlePageMeta($slug: String!, $locale: I18NLocaleCode) {
  article(slug: $slug, locale: $locale) {
    seo {
      ...SeoForPage
    }
  }
}
    ${SeoForPageFragmentDoc}`;

export const useGetArticlePageMetaQuery = <
      TData = GetArticlePageMetaQuery,
      TError = unknown
    >(
      variables: GetArticlePageMetaQueryVariables,
      options?: Omit<UseQueryOptions<GetArticlePageMetaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetArticlePageMetaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetArticlePageMetaQuery, TError, TData>(
      {
    queryKey: ['GetArticlePageMeta', variables],
    queryFn: useFetcher<GetArticlePageMetaQuery, GetArticlePageMetaQueryVariables>(GetArticlePageMetaDocument).bind(null, variables),
    ...options
  }
    )};
