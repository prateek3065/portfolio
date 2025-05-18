import AboutMeCard from "./about-me-card/about-me-card";
import Image from "next/image";
import UsingHeroSectionScroll from "./client/using-hero-section-scroll/using-hero-section-scroll";

const HeroSection: React.FC = () => {
  return (
    <section className="relative perspective-[1000px] h-[56rem]">
      <div className="relative h-[40rem] flex flex-col items-center perspective-[1000px] w-full">
        <AboutMeCard />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10">
          <Image
            className="max-w-[1920px]"
            src="/assets/bg-website-min.png"
            alt="bg-img"
            width={1920}
            height={0}
          />
        </div>
      </div>

      <UsingHeroSectionScroll />
    </section>
  );
};
export default HeroSection;
