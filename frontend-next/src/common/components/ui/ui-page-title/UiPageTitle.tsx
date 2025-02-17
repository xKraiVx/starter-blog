import { Typography, TypographyProps } from "@mui/material";
import { JSX } from "react";

export default function UiPageTitle({
  children,
  sx,
  ...props
}: TypographyProps): JSX.Element | null {
  if (!children) {
    return null;
  }

  return (
    <Typography
      variant="h1"
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
