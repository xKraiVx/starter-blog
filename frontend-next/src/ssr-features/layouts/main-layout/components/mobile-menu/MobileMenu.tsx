"use client";

import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { JSX, useState } from "react";
import { useResponsive } from "@/common/hooks/useResponsive";
import Navigation from "@/ssr-features/layouts/main-layout/components/navigation/Navigation";

export default function MobileMenu(): JSX.Element | null {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useResponsive();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  if (isDesktop) {
    return null;
  }

  return (
    <>
      <IconButton
        sx={{
          height: 40,
          width: 40,
        }}
        onClick={toggleDrawer(true)}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        anchor="bottom"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { py: 4 },
        }}
        sx={{ py: 2 }}
      >
        <Navigation
          onNavigationItemClick={toggleDrawer(false)}
          sx={{
            flexDirection: "column",
            gap: 4,
          }}
        />
      </Drawer>
    </>
  );
}
