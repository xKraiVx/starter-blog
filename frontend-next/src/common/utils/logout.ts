import { removeAuthCookies } from "@/app/auth/actions";
import { PRIVAT_PATHS } from "@/common/constants/privatPaths";
import { redirect } from "next/navigation";

export const logout = (): void => {
  removeAuthCookies();
  redirectFromPrivatPageToHomePage();
};

function redirectFromPrivatPageToHomePage() {
  const pathname = location.pathname;

  if (PRIVAT_PATHS.some((path) => pathname.includes(path))) {
    redirect("/");
  }
}
