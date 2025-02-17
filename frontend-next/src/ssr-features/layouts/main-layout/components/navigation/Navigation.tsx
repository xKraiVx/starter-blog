import NavigationItem from "@/ssr-features/layouts/main-layout/components/navigation/components/NavigationItem";
import { NAVIGATION_LIST } from "@/ssr-features/layouts/main-layout/components/navigation/constants/navigationList";
import { Box, Container } from "@mui/material";
import NextLink from "next/link";

export default function Navigation() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.href} component={NextLink} href={item.href}>
          {item.label}
        </NavigationItem>
      ))}
    </Box>
  );
}
