import { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { EPageBuilderWidget } from "@/features/page-builder/enums/pageBuilderWidget";
import { PageBuilderWidgetsFragment } from "@/ssr-features/graphql/fragments/pageBuilderWidgets.generated";
import HeroWidget from "@/features/page-builder/components/hero-widget/HeroWidget";

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
        switch (widgetData?.__typename) {
          case EPageBuilderWidget.CallToAction:
            return <Typography key={key}>CallToAction</Typography>;
          case EPageBuilderWidget.Hero:
            return <HeroWidget key={key} data={widgetData} />;
          case EPageBuilderWidget.Grid:
            return <Typography key={key}>Grid</Typography>;
          case EPageBuilderWidget.TextWithImage:
            return <Typography key={key}>TextWithImage</Typography>;
          case EPageBuilderWidget.Error:
            return (
              <Typography color="error" key={key}>
                Something whent wrong!
              </Typography>
            );
          default:
            return (
              <Typography color="error" key={key}>
                Have not widget!
              </Typography>
            );
        }
      })}
    </Box>
  );
}
