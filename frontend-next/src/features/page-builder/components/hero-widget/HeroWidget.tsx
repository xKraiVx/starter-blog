import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { HeroWidgetFragment } from "@/ssr-features/graphql/fragments/heroWidget.generated";

interface IHeroWidgetProps {
  data: HeroWidgetFragment;
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
