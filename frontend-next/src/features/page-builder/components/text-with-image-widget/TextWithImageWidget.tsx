import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { TextWithImageWidgetFragment } from "@/ssr-features/graphql/fragments/textWithImageWidget.generated";

interface IHeroWidgetProps {
  data: TextWithImageWidgetFragment;
}

export default function TextWithImageWidget({
  data,
}: IHeroWidgetProps): JSX.Element {
  const { title, text } = data;

  return (
    <Box component="section">
      <Typography variant="h2">{title}</Typography>
      <BlocksRenderer content={text} />
    </Box>
  );
}
