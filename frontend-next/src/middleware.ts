import { routing } from "./i18n/routing";

import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { getPrivatPathnamesWithLocale } from "@/common/utils/getPrivatPathnamesWithLocale";

// Create middleware with i18n handling
const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  // create redirection if has jwt token in server cookies from profile page to home page

  const serverCookies = request.cookies;
  const token = serverCookies.get("jwt")?.value;
  const locale = request.cookies.get("NEXT_LOCALE")?.value;

  const privatPathnames = getPrivatPathnamesWithLocale(locale);

  const homePathname = `/${locale}`;

  if (privatPathnames.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL(homePathname, request.nextUrl));
  }

  return intlMiddleware(request);
}

// Configure paths that middleware should handle
export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
