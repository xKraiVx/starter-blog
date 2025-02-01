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
export type DynamicPagesSlugsQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type DynamicPagesSlugsQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'Page', slug: string } | null> };



export const DynamicPagesSlugsDocument = `
    query DynamicPagesSlugs($locale: I18NLocaleCode) {
  pages(locale: $locale) {
    slug
  }
}
    `;

export const useDynamicPagesSlugsQuery = <
      TData = DynamicPagesSlugsQuery,
      TError = unknown
    >(
      variables?: DynamicPagesSlugsQueryVariables,
      options?: Omit<UseQueryOptions<DynamicPagesSlugsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<DynamicPagesSlugsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<DynamicPagesSlugsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['DynamicPagesSlugs'] : ['DynamicPagesSlugs', variables],
    queryFn: fetcher<DynamicPagesSlugsQuery, DynamicPagesSlugsQueryVariables>(DynamicPagesSlugsDocument, variables),
    ...options
  }
    )};
