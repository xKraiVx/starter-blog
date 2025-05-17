import { PaletteOptions } from "@mui/material/styles/createPalette";

export const BaseLine = (palette: PaletteOptions) => ({
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
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: palette?.primary?.main,
          },
        },
      },
    },
  },
});
