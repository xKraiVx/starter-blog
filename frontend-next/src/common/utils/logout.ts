import { removeAuthCookies } from "@/app/auth/actions";

export const logout = (): void => {
  removeAuthCookies();
};
