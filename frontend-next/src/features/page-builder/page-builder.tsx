import { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { PageBuilderWidgetsFragment } from "@/ssr-features/graphql/fragments/pageBuilderWidgets.generated";
import { PAGE_BUILDER_WIDGET } from "@/features/page-builder/constants/pageBuilderWidgets";

interface IPageBuilderProps {
  widgets: (PageBuilderWidgetsFragment | null)[] | null | undefined;
}

export default function PageBuilder({
  widgets,
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
          <WidgetComponent key={key} data={widgetData} />
        ) : (
          <Typography color="error" key={key}>
            Something went wrong!
          </Typography>
        );
      })}
    </Box>
  );
}
