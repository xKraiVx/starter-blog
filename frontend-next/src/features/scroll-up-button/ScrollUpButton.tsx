"use client";

import { useScrollTrigger } from "@/common/hooks/useScrollTrigger";
import { ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JSX } from "react";

export default function ScrollUpButton(): JSX.Element | null {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { scrolledDistance } = useScrollTrigger();

  if (scrolledDistance < 50) {
    return null;
  }

  return (
    <IconButton
      color="primary"
      size="large"
      sx={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        zIndex: 1000,
      }}
      onClick={handleClick}
    >
      <ArrowUpward />
    </IconButton>
  );
}
