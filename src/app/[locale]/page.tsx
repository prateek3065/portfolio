import { redirect } from "@/i18n/routing";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "de" },
    { locale: "pl" },
    // Add all locales you support
  ];
}

export default function Page() {
  redirect({
    href: "/home",
    locale: "en",
  });
  return <div>Redirecting</div>;
}
