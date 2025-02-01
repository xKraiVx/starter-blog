import { routing } from "./i18n/routing";

import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

// Create middleware with i18n handling
const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
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
