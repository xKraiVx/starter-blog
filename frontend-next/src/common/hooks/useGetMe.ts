import {
  useGetMeQuery,
  UserForMeFragment,
} from "@/common/graphql/queries/getMe.generated";

interface UseGetMeResult {
  data: UserForMeFragment | null;
  isLoading: boolean;
}

type TUseLogin = () => UseGetMeResult;

export const useGetMe: TUseLogin = () => {
  const { data, isLoading } = useGetMeQuery();

  return { data: data?.me ?? null, isLoading };
};
