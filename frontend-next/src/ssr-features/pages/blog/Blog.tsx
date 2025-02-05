import { GetBlogPageQuery } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IBlogProps {
  data: GetBlogPageQuery;
}

export default function Blog({ data }: IBlogProps): JSX.Element {
  const { blog, articles, articles_connection, categories } = data;

  return (
    <Box>
      {blog?.title && <Typography variant="h1">{blog.title}</Typography>}
      {categories?.map((category) => (
        <Box key={category?.slug}>
          <Link component={NextLink} href={`/blog/category/${category?.slug}`}>
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
    </Box>
  );
}
