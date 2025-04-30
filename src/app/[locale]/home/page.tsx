export const dynamic = "force-dynamic";
import HeroSection from "@/components/compound/home/hero-section/hero-section";
import MyTechStack from "@/components/compound/home/my-tech-stack/my-tech-stack";

export default function Home() {
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
