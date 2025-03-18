"use client";

import { useSession } from "@/providers/session-provider/hooks/useSession";
import LoginButton from "@/ssr-features/layouts/main-layout/components/login-button/LoginButton";
import UserMenu from "@/ssr-features/layouts/main-layout/components/user-menu/UserMenu";

export default function HeaderActions() {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return <UserMenu />;
  }

  return <LoginButton />;
}
