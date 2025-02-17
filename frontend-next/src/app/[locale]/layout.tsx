import { ILayoutProps } from "@/common/types/general-props.type";
import { routing } from "@/i18n/routing";
import Providers from "@/providers/Providers";
import MainLayout from "@/ssr-features/layouts/main-layout/MainLayout";
import type { Metadata } from "next";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { JSX } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: ILayoutProps): Promise<JSX.Element> {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers messages={messages}>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
