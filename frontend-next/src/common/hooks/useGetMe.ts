import {
  useGetMeQuery,
  UserForMeFragment,
} from "@/common/graphql/queries/getMe.generated";
import { useSession } from "@/providers/session-provider/hooks/useSession";

interface UseGetMeResult {
  data: UserForMeFragment | null;
  isLoading: boolean;
}

type TUseLogin = () => UseGetMeResult;

export const useGetMe: TUseLogin = () => {
  const { isAuthenticated } = useSession();

  const { data, isLoading } = useGetMeQuery({}, { enabled: isAuthenticated });

  return { data: data?.me ?? null, isLoading };
};
