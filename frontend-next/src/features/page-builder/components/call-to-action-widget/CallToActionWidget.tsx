import { Box, Typography, Button } from "@mui/material";
import { JSX } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { CallToActionWidgetFragment } from "@/ssr-features/graphql/fragments/callToActionWidget.generated";

interface ICallToActionWidgetProps {
  data: CallToActionWidgetFragment;
}

export default function CallToActionWidget({
  data,
}: ICallToActionWidgetProps): JSX.Element {
  const { title, description, buttonText } = data;

  return (
    <Box component="section">
      <Typography variant="h2">{title}</Typography>
      <BlocksRenderer content={description} />
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    </Box>
  );
}
