import { UsersPermissionsRegisterInput } from "@/graphql/graphql-generated-types/types";
import { setAuthCookies } from "@/app/auth/actions";
import {
  RegisterMutation,
  useRegisterMutation,
} from "@/features/auth-modal/graphql/mutations/register.generated";

interface UseRegisterResult {
  register: (data: UsersPermissionsRegisterInput) => Promise<void>;
  isLoading: boolean;
}

type TUseRegister = (
  onCompleted?: (data: RegisterMutation) => void
) => UseRegisterResult;

export const useRegister: TUseRegister = (onCompleted) => {
  const { mutate, isPending } = useRegisterMutation({
    onSuccess: async (data) => {
      setAuthCookies(String(data.register.jwt));
      onCompleted?.(data);
    },
  });

  const register = async (data: UsersPermissionsRegisterInput) => {
    const response = await mutate({
      input: data,
    });

    return response;
  };

  return {
    register,
    isLoading: isPending,
  };
};
