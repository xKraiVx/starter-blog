import { Box, Container, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { TextWithImageWidgetFragment } from "@/ssr-features/graphql/fragments/textWithImageWidget.generated";
import UiImage from "@/common/components/ui/ui-image/UiImage";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/components/ui/ui-section-title/UiSectionTitle";
import AnimatedSection from "@/common/components/animated/animated-section/AnimatedSection";

interface IHeroWidgetProps {
  data: TextWithImageWidgetFragment;
}

export default function TextWithImageWidget({
  data,
}: IHeroWidgetProps): JSX.Element {
  const { title, text, image, isImageOnLeftSide } = data;

  console.log({ data });

  return (
    <AnimatedSection>
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
          <UiSectionTitle>{title}</UiSectionTitle>
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
    </AnimatedSection>
  );
}
