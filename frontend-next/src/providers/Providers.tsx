import BlogThemeProvider from "@/providers/blog-theme-provider/BlogThemeProvider";
import { ReactQueryProvider } from "@/providers/react-query-provider/ReactQueryProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { JSX, PropsWithChildren } from "react";

interface IProvidersProps extends PropsWithChildren {
  messages: AbstractIntlMessages;
}

function Providers({ children, messages }: IProvidersProps): JSX.Element {
  return (
    <NextIntlClientProvider messages={messages}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <BlogThemeProvider options={{ key: "mui", prepend: true }}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </BlogThemeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}

export default Providers;
