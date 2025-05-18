import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};

export async function middleware(request: NextRequest) {
  const newResponse = createMiddleware({
    locales: routing.locales,
    defaultLocale: "en",
    localePrefix: "as-needed",
  })(request);
  newResponse.headers.set("x-pathname", request.nextUrl.pathname);
  return newResponse;
}