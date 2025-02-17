import UiPageContainer from "@/common/components/ui/ui-page-container/UiPageContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import UiPagination from "@/ssr-features/pages/blog/components/UiPagination";
import { ARTICLES_PER_PAGE } from "@/ssr-features/pages/blog/constants/articlesPerPage";
import { GetBlogPageQuery } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IBlogProps {
  data: GetBlogPageQuery;
  categorySlug?: string;
  pageNumber: number;
}

export default function Blog({
  data,
  pageNumber,
  categorySlug,
}: IBlogProps): JSX.Element {
  const { blog, articles, articles_connection, categories } = data;

  const totalPages = articles_connection?.pageInfo.total
    ? Math.ceil(articles_connection.pageInfo.total / ARTICLES_PER_PAGE)
    : undefined;

  return (
    <UiPageContainer>
      <UiPageTitle>{blog?.title}</UiPageTitle>
      {categories?.map((category) => (
        <Box key={category?.slug}>
          <Link component={NextLink} href={`/blog/${category?.slug}`}>
            {category?.name}
          </Link>
        </Box>
      ))}
      {articles?.map((article) => (
        <Box key={article?.slug}>
          <NextLink href={`/blog/article/${article?.slug}`}>
            <Typography variant="h2">{article?.title}</Typography>
          </NextLink>
        </Box>
      ))}
      <Typography>
        Articles count {articles_connection?.pageInfo.total}
      </Typography>
      <UiPagination
        count={totalPages}
        defaultPage={pageNumber}
        additionalSlug={categorySlug}
      />
    </UiPageContainer>
  );
}
