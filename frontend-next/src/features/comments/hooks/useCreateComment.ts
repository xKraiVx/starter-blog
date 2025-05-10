import {
  CreateCommentMutation,
  useCreateCommentMutation,
} from "@/features/comments/graphql/mutations/createComment.generated";
import {
  CommentBySlugInput,
  Exact,
} from "@/graphql/graphql-generated-types/types";
import { UseMutateFunction } from "@tanstack/react-query";

interface IUseCreateCommentResult {
  mutate: UseMutateFunction<
    CreateCommentMutation,
    unknown,
    Exact<{
      data: CommentBySlugInput;
    }>,
    unknown
  >;
  isLoading: boolean;
}

type TUseCreateComment = (
  onCompleted?: VoidFunction
) => IUseCreateCommentResult;

export const useCreateComment: TUseCreateComment = (onCompleted) => {
  const { mutate, isPending } = useCreateCommentMutation({
    onSuccess() {
      onCompleted?.();
    },
  });

  return { mutate, isLoading: isPending };
};
