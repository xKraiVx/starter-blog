import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import { GridWidgetFragment } from "@/ssr-features/graphql/fragments/gridWidget.generated";
import GridWidgetItem from "@/features/page-builder/components/grid-widget/GridWidgetItem";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import {
  GRID_WIDGET_DESKTOP_COLUMN_COUNT,
  GRID_WIDGET_MOBILE_COLUMN_COUNT,
  GRID_WIDGET_TABLET_COLUMN_COUNT,
} from "@/features/page-builder/components/grid-widget/constants/gridWidgetResponsive.constants";
import {
  Enum_Componentwidgetsgrid_Desktopcolumncount,
  Enum_Componentwidgetsgrid_Mobilecolumncount,
  Enum_Componentwidgetsgrid_Tabletcolumncount,
} from "@/graphql/graphql-generated-types/types";

interface IGridWidgetProps {
  data: GridWidgetFragment;
}

export default function GridWidget({ data }: IGridWidgetProps): JSX.Element {
  const {
    title,
    item,
    desktopColumnCount,
    tabletColumnCount,
    mobileColumnCount,
  } = data;

  return (
    <UiSectionContainer component="section">
      {title && (
        <Typography variant="h2" sx={{ mb: 4 }}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: `repeat(${
              GRID_WIDGET_MOBILE_COLUMN_COUNT[
                mobileColumnCount ??
                  Enum_Componentwidgetsgrid_Mobilecolumncount.Three
              ]
            }, 1fr)`,
            md: `repeat(${
              GRID_WIDGET_TABLET_COLUMN_COUNT[
                tabletColumnCount ??
                  Enum_Componentwidgetsgrid_Tabletcolumncount.Two
              ]
            }, 1fr)`,
            lg: `repeat(${
              GRID_WIDGET_DESKTOP_COLUMN_COUNT[
                desktopColumnCount ??
                  Enum_Componentwidgetsgrid_Desktopcolumncount.One
              ]
            }, 1fr)`,
          },
          gap: 2,
        }}
      >
        {item?.map((itemData, key) => (
          <GridWidgetItem key={key} itemData={itemData} />
        ))}
      </Box>
    </UiSectionContainer>
  );
}
