import { Box, Container, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { TextWithImageWidgetFragment } from "@/ssr-features/graphql/fragments/textWithImageWidget.generated";
import UiImage from "@/common/components/ui/ui-image/UiImage";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";

interface IHeroWidgetProps {
  data: TextWithImageWidgetFragment;
}

export default function TextWithImageWidget({
  data,
}: IHeroWidgetProps): JSX.Element {
  const { title, text, image } = data;

  return (
    <UiSectionContainer component="section" sx={{ display: "flex", gap: 4 }}>
      <Box>
        <Typography variant="h2">{title}</Typography>
        <BlocksRenderer content={text} />
      </Box>
      <UiImage data={image} />
    </UiSectionContainer>
  );
}
