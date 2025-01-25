"use client";

import { createTheme } from "@mui/material/styles";
import { typography } from "@/providers/theme/default-theme/typography";
import { palette } from "@/providers/theme/default-theme/palette";

export const theme = createTheme({
  typography,
  palette: {
    ...palette,
  },
});
