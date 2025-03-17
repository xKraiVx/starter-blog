import { ELocale } from "@/common/enums/locale.enum";
import { fetcher } from "@/graphql/fetcher";
import { ARTICLES_PER_PAGE } from "@/ssr-features/pages/blog/constants/articlesPerPage";
import {
  GetBlogPageDocument,
  GetBlogPageQuery,
  GetBlogPageQueryVariables,
} from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { getCategoryAndPage } from "@/ssr-features/pages/blog/utils/getCategoryAndPage";

interface IGetBlogPageArgs {
  locale: ELocale;
  slugs?: string[];
}

export const getBlogPage = async ({
  locale,
  slugs,
}: IGetBlogPageArgs): Promise<GetBlogPageQuery> => {
  const { categorySlug, pageNumber } = getCategoryAndPage(slugs);

  const data = await fetcher<GetBlogPageQuery, GetBlogPageQueryVariables>(
    GetBlogPageDocument,
    {
      locale,
      filters: { category: { slug: { eq: categorySlug } } },
      pagination: {
        page: pageNumber,
        pageSize: ARTICLES_PER_PAGE,
      },
    }
  )();

  return data;
};
