import {
  Exact,
  UsersPermissionsLoginInput,
} from "@/graphql/graphql-generated-types/types";
import { UseMutateFunction } from "@tanstack/react-query";
import {
  LoginMutation,
  useLoginMutation,
} from "@/features/auth-modal/graphql/mutations/login.generated";
import { setAuthCookies } from "@/app/auth/actions";

interface UseLoginResult {
  login: UseMutateFunction<
    LoginMutation,
    unknown,
    Exact<{ input: UsersPermissionsLoginInput }>,
    unknown
  >;
  isLoading: boolean;
}

type TUseLogin = (
  onCompleted?: (data: LoginMutation) => void
) => UseLoginResult;

export const useLogin: TUseLogin = (onCompleted) => {
  const { mutate, isPending } = useLoginMutation({
    onSuccess: async (data) => {
      setAuthCookies(String(data.login.jwt));
      onCompleted?.(data);
    },
  });

  return {
    login: mutate,
    isLoading: isPending,
  };
};
