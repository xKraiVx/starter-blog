import {
  MeForSessionProviderFragment,
  useGetMeForSessionProviderQuery,
} from "@/providers/session-provider/graphql/queries/getMeForSessionProvider.generated";

interface UseGetMeForSessionProviderResult {
  data: MeForSessionProviderFragment | null;
  isLoading: boolean;
}

type TUseLogin = () => UseGetMeForSessionProviderResult;

export const useGetMeForSessionProvider: TUseLogin = () => {
  const { data, isLoading } = useGetMeForSessionProviderQuery();

  return { data: data?.me ?? null, isLoading };
};
