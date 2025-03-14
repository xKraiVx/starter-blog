import {
  LoginMutation,
  useLoginMutation,
} from "@/features/login-modal/graphql/mutations/login.generated";
import {
  Exact,
  UsersPermissionsLoginInput,
} from "@/graphql/graphql-generated-types/types";
import { UseMutateFunction } from "@tanstack/react-query";

interface UseLoginResult {
  login: UseMutateFunction<
    LoginMutation,
    unknown,
    Exact<{ input: UsersPermissionsLoginInput }>,
    unknown
  >;
  isLoading: boolean;
}

type TUseLogin = (onCompleted?: VoidFunction) => UseLoginResult;

export const useLogin: TUseLogin = (onCompleted) => {
  const { mutate, isPending } = useLoginMutation({
    onSuccess() {
      onCompleted?.();
    },
  });

  return {
    login: mutate,
    isLoading: isPending,
  };
};
