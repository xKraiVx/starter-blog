import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CallToActionWidgetFragment } from "@/ssr-features/graphql/fragments/callToActionWidget.generated";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import CallToAction from "@/features/call-to-action/CallToAction";
import UiSectionTitle from "@/common/components/ui/ui-section-title/UiSectionTitle";
import { getImageUrl } from "@/common/utils/getImageUrl";
import AnimatedSection from "@/common/components/animated/animated-section/AnimatedSection";

interface ICallToActionWidgetProps {
  data: CallToActionWidgetFragment;
}

export default function CallToActionWidget({
  data,
}: ICallToActionWidgetProps): JSX.Element {
  const { title, description, backgroundImage } = data;

  return (
    <AnimatedSection>
      <Box
        sx={{
          bgcolor: "grey.800",
          backgroundImage: `url(${getImageUrl(backgroundImage?.url)})`,
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
        }}
      >
        <UiSectionContainer component="section">
          <UiSectionTitle>{title}</UiSectionTitle>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <BlocksRenderer content={description} />
            </Box>
            <CallToAction
              sx={{
                flex: 1,
              }}
            />
          </Box>
        </UiSectionContainer>
      </Box>
    </AnimatedSection>
  );
}
