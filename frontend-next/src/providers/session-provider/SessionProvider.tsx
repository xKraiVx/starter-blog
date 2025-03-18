"use client";

import { TMaybe } from "@/common/types/general-types.type";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface ISessionContext {
  isAuthenticated: boolean;
  token: TMaybe<string>;
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
    setValue({ token: token || null, isAuthenticated: !!token });
  }, [token]);

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
