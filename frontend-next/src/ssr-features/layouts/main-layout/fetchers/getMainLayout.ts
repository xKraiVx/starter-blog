import { fetcher } from "@/graphql/fetcher";
import {
  GetMainLayoutDataDocument,
  GetMainLayoutDataQuery,
  GetMainLayoutDataQueryVariables,
} from "@/ssr-features/layouts/main-layout/graphql/queries/getMainLayout.generated";

export const getMainLayout = async (
  locale: string
): Promise<GetMainLayoutDataQuery | null> => {
  const data = await fetcher<
    GetMainLayoutDataQuery,
    GetMainLayoutDataQueryVariables
  >(GetMainLayoutDataDocument, {
    locale,
  })();

  return data || null;
};
