import { ELocale } from "@/common/enums/locale.enum";
import fetcher from "@/graphql/fetcher";

import {
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";

export const getHomePage = async (
  locale: ELocale
): Promise<GetHomePageQuery> => {
  const data = await fetcher<GetHomePageQuery, GetHomePageQueryVariables>(
    GetHomePageDocument,
    { locale }
  )();

  return data;
};
