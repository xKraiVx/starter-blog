"use client";

import { overrideComponents } from "@/providers/blog-theme-provider/override-components";
import { palette } from "@/providers/blog-theme-provider/palette";
import { typography } from "@/providers/blog-theme-provider/typography";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography,
  palette: {
    ...palette,
  },
  components: overrideComponents,
});
