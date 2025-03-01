import {
  CreateMessageMutation,
  useCreateMessageMutation,
} from "@/features/call-to-action/graphql/mutations/createMessage.generated";
import { Exact, MessageInput } from "@/graphql/graphql-generated-types/types";
import { UseMutateFunction } from "@tanstack/react-query";

interface IUseCreateMessageArgs {
  onCompleted?: VoidFunction;
}

interface IUseCreateMessageResult {
  mutate: UseMutateFunction<
    CreateMessageMutation,
    unknown,
    Exact<{ data: MessageInput }>,
    unknown
  >;
  isLoading: boolean;
}

type TUseCreateMessage = (
  args: IUseCreateMessageArgs
) => IUseCreateMessageResult;

export const useCreateMessage: TUseCreateMessage = ({ onCompleted }) => {
  const { mutate, isPending } = useCreateMessageMutation({
    onSuccess() {
      onCompleted?.();
    },
  });

  return { mutate, isLoading: isPending };
};
