import { getImageUrl } from "@/common/utils/getImageUrl";
import { GridItemFragment } from "@/ssr-features/graphql/fragments/gridWidget.generated";
import { Box, Typography } from "@mui/material";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { JSX } from "react";

interface IGridWidgetItemProps {
  itemData: GridItemFragment | null;
}

export default function GridWidgetItem({
  itemData,
}: IGridWidgetItemProps): JSX.Element | null {
  if (!itemData) {
    return null;
  }

  const { backgroundImage, icon, title, description } = itemData;

  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundImage: `url(${getImageUrl(backgroundImage?.url)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "common.white",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
        p: 4,
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <BlocksRenderer content={description} />
    </Box>
  );
}
