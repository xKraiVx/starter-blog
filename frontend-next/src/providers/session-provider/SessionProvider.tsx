"use client";

import { removeAuthCookies, setAuthCookies } from "@/app/auth/actions";
import { UsersPermissionsLoginInput } from "@/graphql/graphql-generated-types/types";
import { useLogin } from "@/providers/session-provider/hooks/useLogin";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface ISessionContext {
  signIn: (input: UsersPermissionsLoginInput) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const SessionContext = createContext<ISessionContext | undefined>(
  undefined
);

export default function SessionProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState<
    Omit<ISessionContext, "signIn" | "signOut">
  >({
    isAuthenticated: false,
    isLoading: false,
  });

  const { login, isLoading } = useLogin((data) => {
    setAuthCookies(String(data.login.jwt));
    setValue((prev) => ({
      ...prev,
      isAuthenticated: true,
    }));
  });

  async function signIn(input: UsersPermissionsLoginInput) {
    removeAuthCookies();
    login({
      input,
    });
  }

  async function signOut() {
    setValue((prev) => ({
      ...prev,
      isAuthenticated: false,
    }));
  }

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      isLoading,
    }));
  }, [isLoading]);

  return (
    <SessionContext.Provider value={{ ...value, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}
