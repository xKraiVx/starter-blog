import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CallToActionWidgetFragment } from "@/ssr-features/graphql/fragments/callToActionWidget.generated";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import CallToAction from "@/features/call-to-action/CallToAction";

interface ICallToActionWidgetProps {
  data: CallToActionWidgetFragment;
}

export default function CallToActionWidget({
  data,
}: ICallToActionWidgetProps): JSX.Element {
  const { title, description } = data;

  return (
    <Box
      sx={{
        bgcolor: "common.black",
      }}
    >
      <UiSectionContainer component="section">
        <Typography variant="h2">{title}</Typography>
        <BlocksRenderer content={description} />
        <CallToAction />
      </UiSectionContainer>
    </Box>
  );
}
