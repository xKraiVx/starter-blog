import * as Types from '../../../../graphql/graphql-generated-types/types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type GetMeForSessionProviderQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMeForSessionProviderQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', email?: string | null, id: string, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null } | null } | null };

export type MeForSessionProviderFragment = { __typename?: 'UsersPermissionsMe', email?: string | null, id: string, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null } | null };

export type RoleForSessionProviderFragment = { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null };


export const RoleForSessionProviderFragmentDoc = `
    fragment RoleForSessionProvider on UsersPermissionsMeRole {
  name
  type
}
    `;
export const MeForSessionProviderFragmentDoc = `
    fragment MeForSessionProvider on UsersPermissionsMe {
  email
  id
  role {
    ...RoleForSessionProvider
  }
}
    ${RoleForSessionProviderFragmentDoc}`;
export const GetMeForSessionProviderDocument = `
    query getMeForSessionProvider {
  me {
    ...MeForSessionProvider
  }
}
    ${MeForSessionProviderFragmentDoc}`;

export const useGetMeForSessionProviderQuery = <
      TData = GetMeForSessionProviderQuery,
      TError = unknown
    >(
      variables?: GetMeForSessionProviderQueryVariables,
      options?: Omit<UseQueryOptions<GetMeForSessionProviderQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetMeForSessionProviderQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetMeForSessionProviderQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getMeForSessionProvider'] : ['getMeForSessionProvider', variables],
    queryFn: useFetcher<GetMeForSessionProviderQuery, GetMeForSessionProviderQueryVariables>(GetMeForSessionProviderDocument).bind(null, variables),
    ...options
  }
    )};
