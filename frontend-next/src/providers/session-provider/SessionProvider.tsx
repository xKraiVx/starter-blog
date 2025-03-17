"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface ISessionContext {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const SessionContext = createContext<ISessionContext | undefined>(
  undefined
);

interface ISessionProviderProps extends PropsWithChildren {
  token?: string;
}

export default function SessionProvider({
  children,
  token,
}: ISessionProviderProps) {
  const [value, setValue] = useState<
    Omit<ISessionContext, "signIn" | "signOut">
  >({
    isAuthenticated: !!token,
    isLoading: false,
  });

  useEffect(() => {
    if (token) {
      setValue({
        isAuthenticated: true,
        isLoading: false,
      });
    }
  }, [token]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
