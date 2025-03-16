import BlogThemeProvider from "@/providers/blog-theme-provider/BlogThemeProvider";
import ReactModalProvider from "@/providers/react-modal-provider/ReactModalProvider";
import { ReactQueryProvider } from "@/providers/react-query-provider/ReactQueryProvider";
import { ScrollTriggerProvider } from "@/providers/scroll-trigger-provider/ScrollTriggerProvider";
import SessionProvider from "@/providers/session-provider/SessionProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { JSX, PropsWithChildren } from "react";

interface IProvidersProps extends PropsWithChildren {
  messages: AbstractIntlMessages;
  token?: string;
}

function Providers({
  children,
  messages,
  token,
}: IProvidersProps): JSX.Element {
  return (
    <NextIntlClientProvider messages={messages}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <BlogThemeProvider options={{ key: "mui", prepend: true }}>
          <ReactQueryProvider>
            <SessionProvider>
              <ReactModalProvider>
                <ScrollTriggerProvider>{children}</ScrollTriggerProvider>
              </ReactModalProvider>
            </SessionProvider>
          </ReactQueryProvider>
        </BlogThemeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}

export default Providers;
