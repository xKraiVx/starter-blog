import * as Types from '../../../../graphql/graphql-generated-types/types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type CreateMessageMutationVariables = Types.Exact<{
  data: Types.MessageInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'Message', uuid?: string | null } | null };

export type MessageFragmentFragment = { __typename?: 'Message', uuid?: string | null };


export const MessageFragmentFragmentDoc = `
    fragment MessageFragment on Message {
  uuid
}
    `;
export const CreateMessageDocument = `
    mutation CreateMessage($data: MessageInput!) {
  createMessage(data: $data) {
    ...MessageFragment
  }
}
    ${MessageFragmentFragmentDoc}`;

export const useCreateMessageMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>) => {
    
    return useMutation<CreateMessageMutation, TError, CreateMessageMutationVariables, TContext>(
      {
    mutationKey: ['CreateMessage'],
    mutationFn: useFetcher<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument),
    ...options
  }
    )};
