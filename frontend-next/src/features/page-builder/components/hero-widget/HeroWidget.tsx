import { Box } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { HeroWidgetFragment } from "@/ssr-features/graphql/fragments/heroWidget.generated";
import { getImageUrl } from "@/common/utils/getImageUrl";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/components/ui/ui-section-title/UiSectionTitle";
import AnimatedSection from "@/common/components/animated/animated-section/AnimatedSection";

interface IHeroWidgetProps {
  data: HeroWidgetFragment;
}

export default function HeroWidget({ data }: IHeroWidgetProps): JSX.Element {
  const { title, description, backgroundImage } = data;

  return (
    <AnimatedSection>
      <Box
        component="section"
        sx={{
          backgroundImage: `url(${getImageUrl(backgroundImage?.url)})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
        }}
      >
        <UiSectionContainer
          sx={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            gap: 4,
          }}
        >
          <UiSectionTitle>{title}</UiSectionTitle>
          <BlocksRenderer content={description} />
        </UiSectionContainer>
      </Box>
    </AnimatedSection>
  );
}
