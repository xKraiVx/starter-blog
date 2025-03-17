import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../../graphql/fragments/seoForPage.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetHomePageMetaQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHomePageMetaQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePage', seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };



export const GetHomePageMetaDocument = `
    query GetHomePageMeta($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    seo {
      ...SeoForPage
    }
  }
}
    ${SeoForPageFragmentDoc}`;

export const useGetHomePageMetaQuery = <
      TData = GetHomePageMetaQuery,
      TError = unknown
    >(
      variables?: GetHomePageMetaQueryVariables,
      options?: Omit<UseQueryOptions<GetHomePageMetaQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetHomePageMetaQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetHomePageMetaQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetHomePageMeta'] : ['GetHomePageMeta', variables],
    queryFn: useFetcher<GetHomePageMetaQuery, GetHomePageMetaQueryVariables>(GetHomePageMetaDocument).bind(null, variables),
    ...options
  }
    )};
