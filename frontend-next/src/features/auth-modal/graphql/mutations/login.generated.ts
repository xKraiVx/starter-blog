import * as Types from '../../../../graphql/graphql-generated-types/types';

import { MeFragmentDoc } from '../fragments/me.generated';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type LoginMutationVariables = Types.Exact<{
  input: Types.UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, documentId: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null } } };



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
    mutationFn: useFetcher<LoginMutation, LoginMutationVariables>(LoginDocument),
    ...options
  }
    )};
