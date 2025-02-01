import { ELocale } from "@/common/enums/locale.enum";
import fetcher from "@/graphql/fetcher";
import {
  BlogPageDataFragment,
  GetBlogPageDocument,
  GetBlogPageQuery,
  GetBlogPageQueryVariables,
} from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";

export const getBlogPage = async (
  locale: ELocale
): Promise<BlogPageDataFragment | undefined | null> => {
  const data = await fetcher<GetBlogPageQuery, GetBlogPageQueryVariables>(
    GetBlogPageDocument,
    { locale }
  )();

  return data.blog;
};
