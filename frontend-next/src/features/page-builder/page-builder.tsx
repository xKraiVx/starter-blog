import { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { PAGE_BUILDER_WIDGET } from "@/features/page-builder/constants/pageBuilderWidgets";
import { GetRecentArticlesQuery } from "@/ssr-features/graphql/queries/getRecentArticles.generated";
import { HomeBuilderWidgetsFragment } from "@/ssr-features/pages/home/graphql/queries/getHomePage.generated";

interface IPageBuilderProps {
  widgets: (HomeBuilderWidgetsFragment | null)[] | null | undefined;
  recentArticles?: GetRecentArticlesQuery;
}

export default function PageBuilder({
  widgets,
  recentArticles,
}: IPageBuilderProps): JSX.Element | null {
  if (!widgets) return null;

  return (
    <Box component="main">
      {widgets.map((widgetData, key) => {
        if (!widgetData) {
          return (
            <Typography color="error" key={key}>
              Have not widget!
            </Typography>
          );
        }

        const WidgetComponent =
          PAGE_BUILDER_WIDGET[widgetData.__typename as EPageBuilderWidget];

        return WidgetComponent ? (
          <WidgetComponent
            key={key}
            data={widgetData}
            recentArticles={recentArticles}
          />
        ) : (
          <Typography color="error" key={key}>
            Something went wrong!
          </Typography>
        );
      })}
    </Box>
  );
}
