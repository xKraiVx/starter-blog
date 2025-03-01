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
    mutationFn: (variables?: CreateMessageMutationVariables) => fetcher<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, variables)(),
    ...options
  }
    )};
