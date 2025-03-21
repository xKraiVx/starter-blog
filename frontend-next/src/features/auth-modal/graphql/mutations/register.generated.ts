import * as Types from '../../../../graphql/graphql-generated-types/types';

import { MeFragmentDoc } from '../fragments/me.generated';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type RegisterMutationVariables = Types.Exact<{
  input: Types.UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, documentId: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null } } };



export const RegisterDocument = `
    mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      ...Me
    }
  }
}
    ${MeFragmentDoc}`;

export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>) => {
    
    return useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      {
    mutationKey: ['Register'],
    mutationFn: useFetcher<RegisterMutation, RegisterMutationVariables>(RegisterDocument),
    ...options
  }
    )};
