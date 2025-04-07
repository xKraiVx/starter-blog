import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import {
  LoginMutation,
  useLoginMutation,
} from "@/features/auth-modal/graphql/mutations/login.generated";
import { setAuthCookies } from "@/app/auth/actions";

interface UseLoginResult {
  login: (data: UsersPermissionsLoginInput) => Promise<void>;
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

  const login = async (input: UsersPermissionsLoginInput) => {
    const response = await mutate({
      input,
    });

    return response;
  };

  return {
    login,
    isLoading: isPending,
  };
};
