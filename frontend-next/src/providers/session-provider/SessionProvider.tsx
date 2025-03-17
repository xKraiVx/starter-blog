"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface ISessionContext {
  isAuthenticated: boolean;
  token?: string;
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
    token,
  });

  useEffect(() => {
    if (token) {
      setValue({ token, isAuthenticated: !!token });
    }
  }, [token]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
