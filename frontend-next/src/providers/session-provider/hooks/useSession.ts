import { useContext } from "react";
import { SessionContext } from "../SessionProvider";

export const useSession = () => {
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  const { isAuthenticated, isLoading } = session;

  return {
    isAuthenticated,
    isLoading,
  };
};
