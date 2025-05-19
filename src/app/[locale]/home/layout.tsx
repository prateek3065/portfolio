import { ReactNode, Suspense } from "react"; // Ensure ReactNode is imported
import { routing } from "@/i18n/routing";

import Header from "./header/header";
type LocaleLayoutProps = {
  params: Promise<{ locale: "en" | "de" | "pl" }>; // Make params a Promise
  children: ReactNode;
};

export function generateStaticParams() {
  const staticParams = routing.locales.map((locale) => ({ locale }));
  return staticParams;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  return (
    <div className="h-full w-full bg-black relative">
      <Suspense fallback={<Header locale={locale} suspense={true} />}>
        <Header locale={locale} suspense={false} />
      </Suspense>

      {children}
    </div>
  );
}
