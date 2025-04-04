import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { IBM_Plex_Sans } from "next/font/google";
import { ReactNode } from "react"; // Ensure ReactNode is imported

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
});

type LocaleLayoutProps = {
  params: Promise<{ locale: "en" | "de" | "pl" }>; // Make params a Promise
  children: ReactNode;
};

export default async function LocaleLayout({
  params,
  children,
}: LocaleLayoutProps) {
  const { locale } = await params; // Await the Promise to get locale
  const messages = await getMessages();

  return (
    <html className={`${IBMPlexSans.className} overflow-hidden`} lang={locale}>
      <head />
      <body className="h-screen overflow-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="h-full">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
