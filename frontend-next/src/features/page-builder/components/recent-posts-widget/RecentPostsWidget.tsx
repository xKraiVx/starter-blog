import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import { RecentPostsWidgetFragment } from "@/ssr-features/graphql/fragments/recentPostsWidget.generated";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import UiPostPreview from "@/common/components/ui/ui-post-preview/UiPostPreview";

interface IRecentPostsWidgetProps {
  data: RecentPostsWidgetFragment;
  recentArticles?: GetRecentArticlesQuery;
}

export default function RecentPostsWidget({
  data,
  recentArticles,
}: IRecentPostsWidgetProps): JSX.Element {
  const { title } = data;

  return (
    <Box component="section">
      <UiSectionContainer>
        <Typography variant="h2">{title}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {recentArticles?.articles?.map((article) => {
            const { slug, title, description, updatedAt, cover } =
              article || {};

            return (
              <UiPostPreview
                sx={{
                  flex: 1,
                }}
                key={slug}
                title={title}
                slug={slug}
                description={description}
                image={cover}
                updatedAt={updatedAt}
              />
            );
          })}
        </Box>
      </UiSectionContainer>
    </Box>
  );
}
