import * as Types from '../../../../graphql/graphql-generated-types/types';

import { CallToActionWidgetFragmentDoc } from '../../../graphql/fragments/callToActionWidget.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetContactUsPageQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']['input']>;
}>;


export type GetContactUsPageQuery = { __typename?: 'Query', contactUs?: { __typename?: 'ContactUs', contactUsSection?: { __typename: 'ComponentWidgetsCallToAction', buttonText?: string | null, description?: any | null, id: string, title?: string | null, backgroundImage?: { __typename?: 'UploadFile', size: number, url: string, alternativeText?: string | null } | null } | null } | null };



export const GetContactUsPageDocument = `
    query GetContactUsPage($locale: I18NLocaleCode) {
  contactUs(locale: $locale) {
    contactUsSection {
      ...CallToActionWidget
    }
  }
}
    ${CallToActionWidgetFragmentDoc}`;

export const useGetContactUsPageQuery = <
      TData = GetContactUsPageQuery,
      TError = unknown
    >(
      variables?: GetContactUsPageQueryVariables,
      options?: Omit<UseQueryOptions<GetContactUsPageQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetContactUsPageQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetContactUsPageQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetContactUsPage'] : ['GetContactUsPage', variables],
    queryFn: useFetcher<GetContactUsPageQuery, GetContactUsPageQueryVariables>(GetContactUsPageDocument).bind(null, variables),
    ...options
  }
    )};
