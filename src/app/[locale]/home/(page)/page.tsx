import HeroSection from "@/app/[locale]/home/(page)/hero-section/hero-section";
import MyTechStack from "@/app/[locale]/home/(page)/my-tech-stack/my-tech-stack";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
import RecommendationSection from "./recommendation-section/recommendation-section";

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
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <MyTechStack />
      <RecommendationSection />
    </>
  );
}