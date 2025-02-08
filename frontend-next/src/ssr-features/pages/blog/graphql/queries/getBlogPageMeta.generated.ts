import * as Types from '../../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../../graphql/fragments/seoForPage.generated';
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
    queryFn: fetcher<GetBlogPageMetaQuery, GetBlogPageMetaQueryVariables>(GetBlogPageMetaDocument, variables),
    ...options
  }
    )};
