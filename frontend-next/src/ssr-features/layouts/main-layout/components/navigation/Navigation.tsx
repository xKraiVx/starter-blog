"use client";

import { useResponsive } from "@/common/hooks/useResponsive";
import NavigationItem from "@/ssr-features/layouts/main-layout/components/navigation/components/NavigationItem";
import { NAVIGATION_LIST } from "@/ssr-features/layouts/main-layout/components/navigation/constants/navigationList";
import { Box, SxProps } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface INavigationProps {
  sx?: SxProps;
  onNavigationItemClick?: VoidFunction;
}

export default function Navigation({
  sx,
  onNavigationItemClick,
}: INavigationProps): JSX.Element | null {
  return (
    <Box
      component="nav"
      sx={{ display: "flex", alignItems: "center", gap: 2, ...sx }}
    >
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem
          onClick={onNavigationItemClick}
          key={item.href}
          component={NextLink}
          href={item.href}
        >
          {item.label}
        </NavigationItem>
      ))}
    </Box>
  );
}
