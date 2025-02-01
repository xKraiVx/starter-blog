import { TypographyOptions } from "@mui/material/styles/createTypography";
import { pxToRem, responsiveFontSizes } from "./utils/font.utils";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bodyL: React.CSSProperties;
    bodyXl: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyL?: React.CSSProperties;
    bodyXl?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyL: true;
    bodyXl: true;
    subtitle3: true;
  }
}

const BASE_FONT = "var(--font-geist-sans), sans-serif";
const SECONDARY_FONT = "var(--font-geist-sans), sans-serif";

export const typography: TypographyOptions = {
  fontFamily: BASE_FONT,
  h1: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(96),
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: 0,
    ...responsiveFontSizes({ xs: 32, sm: 48, md: 64, lg: 96 }),
  },
  h2: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(64),
    lineHeight: 1.2,
    fontWeight: 700,
    ...responsiveFontSizes({ xs: 24, sm: 40, md: 48, lg: 64 }),
  },

  h3: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(48),
    lineHeight: 1.2,
    fontWeight: 300,
    ...responsiveFontSizes({ sm: 32, md: 40, lg: 48 }),
  },
  h4: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(40),
    lineHeight: 1.2,
    fontWeight: 500,
    ...responsiveFontSizes({ sm: 24, md: 32, lg: 40 }),
  },

  h5: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(32),
    lineHeight: 1.5,
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 32 }),
  },
  h6: {
    fontFamily: SECONDARY_FONT,
    fontSize: pxToRem(24),
    lineHeight: 1.5,
    fontWeight: 400,
    ...responsiveFontSizes({ sm: 20, md: 20, lg: 24 }),
  },
  subtitle1: {
    fontSize: pxToRem(32),
    lineHeight: 50 / 32,
    fontWeight: 700,
    ...responsiveFontSizes({ xs: 20, sm: 24, md: 24, lg: 32 }),
  },
  subtitle2: {
    fontSize: pxToRem(36),
    lineHeight: 40 / 36,
    fontWeight: 600,
  },
  subtitle3: {
    fontSize: pxToRem(20),
    lineHeight: 32 / 20,
    fontWeight: 400,
    fontFamily: SECONDARY_FONT,
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 600,
  },
  bodyL: {
    fontSize: pxToRem(18),
    lineHeight: 24 / 18,
    fontWeight: 400,
  },
  bodyXl: {
    fontSize: pxToRem(24),
    lineHeight: 36 / 24,
    fontWeight: 400,
  },
  caption: {
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    fontWeight: 400,
  },
  button: {
    fontSize: pxToRem(18),
    lineHeight: 24 / 18,
    fontWeight: 600,
    textTransform: "none" as React.CSSProperties["textTransform"],
  },
};
