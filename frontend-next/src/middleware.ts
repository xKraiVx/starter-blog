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
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // Exclude API routes and static assets
  ],
};
