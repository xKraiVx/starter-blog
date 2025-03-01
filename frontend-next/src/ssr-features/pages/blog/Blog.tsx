import UiPageContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiPageTitle from "@/common/components/ui/ui-page-title/UiPageTitle";
import UiPagination from "@/common/components/ui/ui-pagination/UiPagination";
import { ARTICLES_PER_PAGE } from "@/ssr-features/pages/blog/constants/articlesPerPage";
import { GetBlogPageQuery } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";
import BlogArticlesList from "@/ssr-features/pages/blog/components/blog-articles-list/BlogArticlesList";
import BlogCategoriesList from "@/ssr-features/pages/blog/components/blog-categories-list/BlogCategoriesList";

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
    <UiPageContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <UiPageTitle>{blog?.title}</UiPageTitle>
      <BlogCategoriesList categories={categories} />
      <BlogArticlesList articles={articles} />
      <UiPagination
        count={totalPages}
        defaultPage={pageNumber}
        additionalSlug={categorySlug}
      />
    </UiPageContainer>
  );
}
