"use client";

import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { JSX, useState } from "react";
import { useResponsive } from "@/common/hooks/useResponsive";

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
      <IconButton onClick={toggleDrawer(true)} color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
        TEST
      </Drawer>
    </>
  );
}
