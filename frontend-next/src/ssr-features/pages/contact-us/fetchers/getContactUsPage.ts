import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import {
  GetContactUsPageDocument,
  GetContactUsPageQuery,
  GetContactUsPageQueryVariables,
} from "@/ssr-features/pages/contact-us/queries/getContactUsPage.generated";

type TGetHomePageReturn = Promise<{
  data: GetContactUsPageQuery;
}>;

export const getContactUsPage = async (locale: ELocale): TGetHomePageReturn => {
  const data = await fetcher<
    GetContactUsPageQuery,
    GetContactUsPageQueryVariables
  >(GetContactUsPageDocument, { locale })();

  return { data };
};
