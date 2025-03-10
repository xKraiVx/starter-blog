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
  const { title, text, image, isImageOnLeftSide } = data;

  return (
    <UiSectionContainer
      component="section"
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography variant="h2">{title}</Typography>
        <BlocksRenderer content={text} />
      </Box>
      <UiImage
        sx={{
          flex: {
            md: 1,
          },
          order: {
            md: isImageOnLeftSide ? -1 : 1,
          },
          height: {
            xs: "100vw",
            md: "unset",
          },
        }}
        data={image}
      />
    </UiSectionContainer>
  );
}
