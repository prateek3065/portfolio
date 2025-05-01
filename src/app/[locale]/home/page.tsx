import HeroSection from "@/components/compound/home/hero-section/hero-section";
import MyTechStack from "@/components/compound/home/my-tech-stack/my-tech-stack";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const staticParams = routing.locales.map((locale) => {
    return { locale: locale };
  });
  return staticParams;
}

type PageProps = {
  params: Promise<{ locale: string }>; // Make params a Promise
};

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  console.log("Page props", locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <div className="relative w-full bottom-[2rem] px-8 md:px-40 lg:px-60">
        <div className="h-[1px] bg-[#262626]" />
      </div>
      <MyTechStack />
    </>
  );
}
