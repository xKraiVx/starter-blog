import { Box, BoxProps } from "@mui/material";
import { JSX } from "react";

export default function UiPageContainer({
  children,
  sx,
  ...props
}: BoxProps): JSX.Element {
  return (
    <Box sx={sx} {...props}>
      {children}
    </Box>
  );
}
