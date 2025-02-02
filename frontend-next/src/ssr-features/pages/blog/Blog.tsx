import { GetBlogPageQuery } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface IBlogProps {
  data: GetBlogPageQuery;
}

export default function Blog({ data }: IBlogProps): JSX.Element {
  const { blog, articles } = data;

  return (
    <Box>
      {blog?.title && <Typography variant="h1">{blog.title}</Typography>}
      {articles?.map((article) => (
        <Box key={article?.slug}>
          <Typography variant="h2">{article?.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
