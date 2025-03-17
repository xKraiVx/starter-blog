import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../../graphql/fragments/seoForPage.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetBlogPageMetaQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetBlogPageMetaQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };



export const GetBlogPageMetaDocument = `
    query GetBlogPageMeta($locale: I18NLocaleCode) {
  blog(locale: $locale) {
    seo {
      ...SeoForPage
    }
  }
}
    ${SeoForPageFragmentDoc}`;

export const useGetBlogPageMetaQuery = <
      TData = GetBlogPageMetaQuery,
      TError = unknown
    >(
      variables?: GetBlogPageMetaQueryVariables,
      options?: Omit<UseQueryOptions<GetBlogPageMetaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetBlogPageMetaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetBlogPageMetaQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetBlogPageMeta'] : ['GetBlogPageMeta', variables],
    queryFn: useFetcher<GetBlogPageMetaQuery, GetBlogPageMetaQueryVariables>(GetBlogPageMetaDocument).bind(null, variables),
    ...options
  }
    )};
