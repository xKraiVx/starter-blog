"use client";

import { LoginRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JSX } from "react";

export default function UserMenu(): JSX.Element {
  return (
    <IconButton color="inherit" aria-label="user menu">
      <LoginRounded />
    </IconButton>
  );
}
