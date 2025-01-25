import { Theme } from "@mui/material";

export const FormLabel = (): Theme["components"] => ({
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontWeight: 700,
      },
    },
  },
});
