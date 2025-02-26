import { GREY } from "@/providers/blog-theme-provider/constants/palette";
import { alpha, Theme } from "@mui/material";

export const Paper: Theme["components"] = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(GREY[500], 0.1),
        borderRadius: 8,
      },
    },
  },
};
