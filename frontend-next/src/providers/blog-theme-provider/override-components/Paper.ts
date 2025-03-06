import { Theme } from "@mui/material";

export const Paper: Theme["components"] = {
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
