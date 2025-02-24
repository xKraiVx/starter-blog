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
        {recentArticles?.articles?.map((article) => (
          <UiPostPreview
            key={article?.slug}
            title={article?.title}
            slug={article?.slug}
          />
        ))}
      </UiSectionContainer>
    </Box>
  );
}
