import {
  ISessionContext,
  SessionContext,
} from "@/providers/session-provider/SessionProvider";
import { useContext } from "react";

export const useSession = (): ISessionContext => {
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  const { isAuthenticated, token } = session;

  return {
    isAuthenticated,
    token,
  };
};
