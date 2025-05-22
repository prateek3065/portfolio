import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { IBM_Plex_Sans } from "next/font/google";
import { ReactNode } from "react"; // Ensure ReactNode is imported
import WithBodyScrollEvent from "./(client)/with-body-scroll-event";
import WithStoreProvider from "./(client)/with-store-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: {
    default: "Prateek Sharma – Frontend Portfolio",
    template: "%s | Prateek Sharma",
  },
  description:
    "Explore production-ready Next.js projects with authentication, i18n, and more.",
  openGraph: {
    title: "Prateek Sharma – Frontend Portfolio",
    description:
      "Explore production-ready Next.js projects with authentication, i18n, and more.",
    url: "https://portfolio-pi-rust-90.vercel.app/home",
    siteName: "Prateek Portfolio",
    images: [
      {
        url: "https://portfolio-pi-rust-90.vercel.app/my-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Sharma – Frontend Portfolio",
    description:
      "Explore production-ready Next.js projects with authentication, i18n, and more.",
    images: ["https://portfolio-pi-rust-90.vercel.app/my-photo.jpeg"],
  },
};

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
});

type LocaleLayoutProps = {
  params: Promise<{ locale: string }>; // Make params a Promise
  children: ReactNode;
};

export default async function LocaleLayout({
  params,
  children,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html className={`${IBMPlexSans.className} overflow-hidden`} lang={locale}>
      <WithStoreProvider>
        <head />
        <WithBodyScrollEvent>
          <NextIntlClientProvider>
            <main className="h-full">{children}</main>
          </NextIntlClientProvider>
        </WithBodyScrollEvent>
      </WithStoreProvider>
    </html>
  );
}
