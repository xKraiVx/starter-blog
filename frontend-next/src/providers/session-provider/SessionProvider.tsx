"use client";

import { createContext, PropsWithChildren, useState } from "react";

interface ISessionContext {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const SessionContext = createContext<ISessionContext | undefined>(
  undefined
);

export default function SessionProvider({ children }: PropsWithChildren) {
  const [value] = useState<Omit<ISessionContext, "signIn" | "signOut">>({
    isAuthenticated: false,
    isLoading: false,
  });

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
