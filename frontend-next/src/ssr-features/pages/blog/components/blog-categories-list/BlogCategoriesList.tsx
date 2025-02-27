import { CategoriesForBlogPageFragment } from "@/ssr-features/pages/blog/graphql/queries/getBlogPage.generated";
import { Box, Button, Link, SxProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IBlogArticlesListProps {
  sx?: SxProps;
  categories: (CategoriesForBlogPageFragment | null)[];
}

export default function BlogCategoriesList({
  sx,
  categories,
}: IBlogArticlesListProps): JSX.Element {
  return (
    <Box sx={{ display: "flex", gap: 4, ...sx }}>
      {categories?.map((category) => (
        <Box key={category?.slug}>
          <Button
            variant="contained"
            LinkComponent={NextLink}
            href={`/blog/${category?.slug}`}
          >
            {category?.name}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
