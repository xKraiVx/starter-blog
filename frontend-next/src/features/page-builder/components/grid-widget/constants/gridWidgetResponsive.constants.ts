import {
  Enum_Componentwidgetsgrid_Desktopcolumncount,
  Enum_Componentwidgetsgrid_Mobilecolumncount,
  Enum_Componentwidgetsgrid_Tabletcolumncount,
} from "@/graphql/graphql-generated-types/types";

export const GRID_WIDGET_DESKTOP_COLUMN_COUNT: Record<
  Enum_Componentwidgetsgrid_Desktopcolumncount,
  number
> = {
  [Enum_Componentwidgetsgrid_Desktopcolumncount.One]: 1,
  [Enum_Componentwidgetsgrid_Desktopcolumncount.Two]: 2,
  [Enum_Componentwidgetsgrid_Desktopcolumncount.Three]: 3,
  [Enum_Componentwidgetsgrid_Desktopcolumncount.Four]: 4,
  [Enum_Componentwidgetsgrid_Desktopcolumncount.Six]: 6,
};

export const GRID_WIDGET_TABLET_COLUMN_COUNT: Record<
  Enum_Componentwidgetsgrid_Tabletcolumncount,
  number
> = {
  [Enum_Componentwidgetsgrid_Tabletcolumncount.One]: 1,
  [Enum_Componentwidgetsgrid_Tabletcolumncount.Two]: 2,
  [Enum_Componentwidgetsgrid_Tabletcolumncount.Three]: 3,
  [Enum_Componentwidgetsgrid_Tabletcolumncount.Four]: 4,
  [Enum_Componentwidgetsgrid_Tabletcolumncount.Six]: 6,
};

export const GRID_WIDGET_MOBILE_COLUMN_COUNT: Record<
  Enum_Componentwidgetsgrid_Mobilecolumncount,
  number
> = {
  [Enum_Componentwidgetsgrid_Mobilecolumncount.One]: 1,
  [Enum_Componentwidgetsgrid_Mobilecolumncount.Two]: 2,
  [Enum_Componentwidgetsgrid_Mobilecolumncount.Three]: 3,
  [Enum_Componentwidgetsgrid_Mobilecolumncount.Four]: 4,
  [Enum_Componentwidgetsgrid_Mobilecolumncount.Six]: 6,
};
