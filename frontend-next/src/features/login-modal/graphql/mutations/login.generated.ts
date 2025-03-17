import * as Types from '../../../../graphql/graphql-generated-types/types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';

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
export type LoginMutationVariables = Types.Exact<{
  input: Types.UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, documentId: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null } } };

export type MeFragment = { __typename?: 'UsersPermissionsMe', id: string, documentId: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null };

export type RoleForLoginFragment = { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null };


export const RoleForLoginFragmentDoc = `
    fragment RoleForLogin on UsersPermissionsMeRole {
  name
  type
  description
}
    `;
export const MeFragmentDoc = `
    fragment Me on UsersPermissionsMe {
  id
  documentId
  username
  email
  confirmed
  blocked
  role {
    ...RoleForLogin
  }
}
    ${RoleForLoginFragmentDoc}`;
export const LoginDocument = `
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      ...Me
    }
  }
}
    ${MeFragmentDoc}`;

export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) => {
    
    return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      {
    mutationKey: ['Login'],
    mutationFn: (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
    ...options
  }
    )};
