import { Theme } from "@mui/material";

export const BaseLine = (): Theme["components"] => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        transition: "background 0.3s ease-in-out",
        "& *": {
          "*::-webkit-scrollbar": {
            width: 6,
            height: 6,
          },
          "*::-webkit-scrollbar-track": {
            backgoundColor: "transparent",
          },
        },
      },
    },
  },
});
