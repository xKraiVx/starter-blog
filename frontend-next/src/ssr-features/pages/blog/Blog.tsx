import { BlogPageDataFragment } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface IBlogProps {
  data: BlogPageDataFragment;
}

export default function Blog({ data }: IBlogProps): JSX.Element {
  const { title } = data;

  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
}
