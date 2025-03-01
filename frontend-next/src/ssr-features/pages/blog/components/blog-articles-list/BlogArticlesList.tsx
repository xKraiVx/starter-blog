import UiPostPreview from "@/common/components/ui/ui-post-preview/UiPostPreview";
import { ArticlesForBlogPageFragment } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, SxProps } from "@mui/material";
import { JSX } from "react";

interface IBlogArticlesListProps {
  sx?: SxProps;
  articles: (ArticlesForBlogPageFragment | null)[];
}

export default function BlogArticlesList({
  articles,
  sx,
}: IBlogArticlesListProps): JSX.Element {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 4,
        ...sx,
      }}
    >
      {articles?.map((article) => {
        const { slug, title, description, updatedAt, cover } = article || {};

        return (
          <UiPostPreview
            key={slug}
            sx={{
              flex: 1,
            }}
            title={title}
            slug={slug}
            description={description}
            image={cover}
            updatedAt={updatedAt}
          />
        );
      })}
    </Box>
  );
}
