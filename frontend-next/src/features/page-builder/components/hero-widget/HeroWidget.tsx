import { PageBuilderWidgets_ComponentWidgetsHero_Fragment } from "@/ssr-features/graphql/fragments/pageBuilderWidgets.generated";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface IHeroWidgetProps {
  data: PageBuilderWidgets_ComponentWidgetsHero_Fragment;
}

export default function HeroWidget({ data }: IHeroWidgetProps): JSX.Element {
  const { title, description } = data;

  return (
    <Box component="section">
      <Typography variant="h2">{title}</Typography>
      <BlocksRenderer content={description} />
    </Box>
  );
}
