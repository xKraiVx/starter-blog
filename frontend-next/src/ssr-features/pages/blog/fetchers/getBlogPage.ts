import { ELocale } from "@/common/enums/locale.enum";
import fetcher from "@/graphql/fetcher";
import {
  GetBlogPageDocument,
  GetBlogPageQuery,
  GetBlogPageQueryVariables,
} from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";

export const getBlogPage = async (
  locale: ELocale,
  variables?: GetBlogPageQueryVariables
): Promise<GetBlogPageQuery> => {
  const data = await fetcher<GetBlogPageQuery, GetBlogPageQueryVariables>(
    GetBlogPageDocument,
    { locale, ...variables }
  )();

  return data;
};
