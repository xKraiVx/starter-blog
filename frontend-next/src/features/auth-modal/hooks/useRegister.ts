import {
  Exact,
  UsersPermissionsRegisterInput,
} from "@/graphql/graphql-generated-types/types";
import { UseMutateFunction } from "@tanstack/react-query";
import { setAuthCookies } from "@/app/auth/actions";
import {
  RegisterMutation,
  useRegisterMutation,
} from "@/features/auth-modal/graphql/mutations/register.generated";

interface UseRegisterResult {
  register: UseMutateFunction<
    RegisterMutation,
    unknown,
    Exact<{ input: UsersPermissionsRegisterInput }>,
    unknown
  >;
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

  return {
    register: mutate,
    isLoading: isPending,
  };
};
