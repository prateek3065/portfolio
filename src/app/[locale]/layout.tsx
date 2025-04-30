import { hasLocale, NextIntlClientProvider } from "next-intl";
import { IBM_Plex_Sans } from "next/font/google";
import { ReactNode } from "react"; // Ensure ReactNode is imported
import WithBodyScrollEvent from "./(client)/with-body-scroll-event";
import WithStoreProvider from "./(client)/with-store-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
});

type LocaleLayoutProps = {
  params: Promise<{ locale: string }>; // Make params a Promise
  children: ReactNode;
};

export function generateStaticParams() {
  const staticParams = routing.locales.map((locale) => ({ locale }));
  console.log("generateStaticParams1", staticParams);
  return staticParams;
}

export default async function LocaleLayout({
  params,
  children,
}: LocaleLayoutProps) {
  const { locale } = await params;
  console.log("LocaleLayout1", locale);
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
