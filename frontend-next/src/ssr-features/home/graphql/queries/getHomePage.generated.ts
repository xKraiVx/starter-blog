import * as Types from '../../../../graphql/graphql-generated-types/types';

import { SeoForPageFragmentDoc } from '../../../graphql/fragments/seoForPage.generated';
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
export type GetHomePageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePage', title?: string | null, documentId: string, seo?: { __typename?: 'ComponentSharedSeo', canonicalURL?: string | null, id: string, keywords?: string | null, metaDescription: string, metaRobots?: string | null, metaTitle: string, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };



export const GetHomePageDocument = `
    query GetHomePage($locale: I18NLocaleCode) {
  homePage(locale: $locale) {
    title
    documentId
    seo {
      ...SeoForPage
    }
  }
}
    ${SeoForPageFragmentDoc}`;

export const useGetHomePageQuery = <
      TData = GetHomePageQuery,
      TError = unknown
    >(
      variables?: GetHomePageQueryVariables,
      options?: Omit<UseQueryOptions<GetHomePageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetHomePageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetHomePageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetHomePage'] : ['GetHomePage', variables],
    queryFn: fetcher<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, variables),
    ...options
  }
    )};
