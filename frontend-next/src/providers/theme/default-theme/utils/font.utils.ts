export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

interface IResponsiveFontSizeResult {
  "@media (min-width:900px)": { fontSize: string };
  "@media (min-width:480px)": { fontSize: string };
  "@media (min-width:0)": { fontSize: string };
  "@media (min-width:1200px)": { fontSize: string };
}

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg,
}: {
  xs?: number;
  sm?: number;
  md: number;
  lg: number;
}): IResponsiveFontSizeResult {
  return {
    "@media (min-width:0)": {
      fontSize: pxToRem(xs || sm || md),
    },
    "@media (min-width:480px)": {
      fontSize: pxToRem(sm || md),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}
