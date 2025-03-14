"use client";

import { useLoginModal } from "@/features/login-modal/hooks/useLoginModal";
import { LoginRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JSX } from "react";

export default function UserMenu(): JSX.Element {
  const [show] = useLoginModal();

  return (
    <IconButton color="inherit" aria-label="user menu" onClick={show}>
      <LoginRounded />
    </IconButton>
  );
}
