import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { GridWidgetFragment } from "@/ssr-features/graphql/fragments/gridWidget.generated";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface IGridWidgetProps {
  data: GridWidgetFragment;
}

export default function GridWidget({ data }: IGridWidgetProps): JSX.Element {
  const { title, item } = data;

  return (
    <Box component="section">
      <Typography variant="h2">{title}</Typography>
      {item?.map((itemData, key) => (
        <Box key={key}>
          <Typography variant="h3">{itemData?.title}</Typography>
          <BlocksRenderer content={itemData?.description} />
        </Box>
      ))}
    </Box>
  );
}
