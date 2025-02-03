import { ArticleForArticlePageFragment } from "@/ssr-features/pages/article/graphql/queries/getArticlePage.generated";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface IArticleProps {
  data: ArticleForArticlePageFragment | null;
}

export default function Article({ data }: IArticleProps): JSX.Element {
  return (
    <Box>
      <Typography variant="h1">{data?.title}</Typography>
    </Box>
  );
}
