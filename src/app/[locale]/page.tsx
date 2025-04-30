import { redirect } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>; // Make params a Promise
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect({
    href: "/home",
    locale: locale,
  });
  return <div>Redirecting</div>;
}
