"use client";

import { useScrollTrigger } from "@/common/hooks/useScrollTrigger";
import { alpha, Box, useTheme } from "@mui/material";
import { JSX, PropsWithChildren, useMemo } from "react";

export default function HeaderWrapper({
  children,
}: PropsWithChildren): JSX.Element {
  const { isScrolledDown, scrolledDistance } = useScrollTrigger();
  const theme = useTheme();

  const headerStyles = useMemo(
    () => ({
      transform: isScrolledDown ? "translateY(-100%)" : "translateY(0)",
      backgroundColor:
        !isScrolledDown && scrolledDistance !== 0
          ? alpha(theme.palette.background.default, 0.9)
          : "transparent",
      boxShadow: scrolledDistance === 0 ? 0 : 3,
      transition: "all .3s ease-in-out",
    }),
    [isScrolledDown, scrolledDistance]
  );

  return (
    <Box
      sx={{ position: "fixed", width: "100%", zIndex: 100, ...headerStyles }}
    >
      {children}
    </Box>
  );
}
