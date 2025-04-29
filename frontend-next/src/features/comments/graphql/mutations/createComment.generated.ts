import * as Types from '../../../../graphql/graphql-generated-types/types';

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useFetcher } from '@/graphql/useFetcher';
export type CreateCommentMutationVariables = Types.Exact<{
  data: Types.CommentBySlugInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', uuid?: string | null } | null };



export const CreateCommentDocument = `
    mutation CreateComment($data: CommentBySlugInput!) {
  createComment(data: $data) {
    uuid
  }
}
    `;

export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>) => {
    
    return useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      {
    mutationKey: ['CreateComment'],
    mutationFn: useFetcher<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument),
    ...options
  }
    )};
