import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../../graphql/fragments/seoForPage.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetAboutPageMetaQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetAboutPageMetaQuery = { __typename?: 'Query', about?: { __typename?: 'About', seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };



export const GetAboutPageMetaDocument = `
    query GetAboutPageMeta($locale: I18NLocaleCode) {
  about(locale: $locale) {
    seo {
      ...SeoForPage
    }
  }
}
    ${SeoForPageFragmentDoc}`;

export const useGetAboutPageMetaQuery = <
      TData = GetAboutPageMetaQuery,
      TError = unknown
    >(
      variables?: GetAboutPageMetaQueryVariables,
      options?: Omit<UseQueryOptions<GetAboutPageMetaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAboutPageMetaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetAboutPageMetaQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetAboutPageMeta'] : ['GetAboutPageMeta', variables],
    queryFn: useFetcher<GetAboutPageMetaQuery, GetAboutPageMetaQueryVariables>(GetAboutPageMetaDocument).bind(null, variables),
    ...options
  }
    )};
