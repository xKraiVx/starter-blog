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
        bgcolor: "grey.800",
      }}
    >
      <UiSectionContainer component="section">
        <Typography variant="h2">{title}</Typography>
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
  );
}
