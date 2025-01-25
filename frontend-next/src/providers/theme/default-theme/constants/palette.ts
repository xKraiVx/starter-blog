import { alpha, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    darken: string;
    lighten: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    accent: string;
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    accent: true;
  }
}
declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    accent: true;
  }
}

export const PRIMARY = {
  main: "#C19A6B", // Camel-like color
  light: "#DABD8C",
  dark: "#A17C49",
  contrastText: "#333",
};
// TODO: define what is secondary
export const SECONDARY = {
  main: "#C3B091", // Khaki color
  light: "#E4DCC9",
  dark: "#8F8260",
  contrastText: "#333",
};

export const ACCENT = {
  light: alpha("#F8DF5E", 0.2),
  main: "#F8DF5E",
  dark: "#D3B304",
};

export const INFO = {
  main: "#00BCD4",
  light: "#62D7E4",
  dark: "#008BA3",
  contrastText: "#000000",
};

export const ERROR = {
  main: "#F44336",
  light: "#FF7961",
  dark: "#BA000D",
  contrastText: "#FFFFFF",
};

export const SUCCESS = {
  main: "#4CAF50",
  light: "#81C784",
  dark: "#388E3C",
  contrastText: "#000000",
};

export const WARNING = {
  main: "#FFC107",
  light: "#FFD54F",
  dark: "#FFA000",
  contrastText: "#000000",
};

export const GREY = {
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};
