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
  main: "#1E88E5", // Bright blue
  light: "#6AB7FF",
  dark: "#005CB2",
  contrastText: "#FFF",
};

export const SECONDARY = {
  main: "#43A047", // Vibrant green
  light: "#76D275",
  dark: "#00701A",
  contrastText: "#FFF",
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
