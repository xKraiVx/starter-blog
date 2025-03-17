"use client";

import { useLoginModal } from "@/features/login-modal/hooks/useLoginModal";
import { useSession } from "@/providers/session-provider/hooks/useSession";
import { LoginRounded, LogoutRounded, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JSX } from "react";

export default function UserMenu(): JSX.Element {
  const [show] = useLoginModal();

  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return (
      <IconButton color="inherit" aria-label="user menu">
        <Person />
      </IconButton>
    );
  }

  return (
    <IconButton color="inherit" aria-label="user menu" onClick={show}>
      <LogoutRounded />
    </IconButton>
  );
}
