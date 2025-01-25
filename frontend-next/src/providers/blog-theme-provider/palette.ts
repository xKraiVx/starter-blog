import { PaletteOptions } from "@mui/material";
import {
  ACCENT,
  ERROR,
  GREY,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING,
} from "./constants/palette";

export const palette: PaletteOptions = {
  primary: { ...SECONDARY, contrastText: GREY[900] },
  secondary: {
    ...PRIMARY,
    contrastText: GREY[900],
  },
  info: {
    ...INFO,
    contrastText: GREY[100],
  },
  accent: {
    ...ACCENT,
    contrastText: GREY[100],
  },
  warning: {
    ...WARNING,
    contrastText: GREY[100],
  },
  error: {
    ...ERROR,
    contrastText: GREY[100],
  },
  success: {
    ...SUCCESS,
    contrastText: GREY[100],
  },
  grey: { ...GREY },
  divider: GREY[100],
  background: {
    paper: GREY[800],
    default: GREY[900],
    darken: GREY[900],
    lighten: GREY[600],
  },
  text: {
    primary: SECONDARY.main,
    secondary: GREY[100],
    disabled: GREY[400],
  },
};
