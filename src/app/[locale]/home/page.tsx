import Image from "next/image";
import AboutMeCard from "@/components/compound/home/about-me-card/about-me-card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="h-[400rem] w-full">
        <div className="text-white text-6xl font-extrabold w-full text-center">
          This is another section
        </div>
      </section>
    </>
  );
}

const HeroSection: React.FC = () => {
  return (
    <section className="perspective-[1000px] h-[56rem]">
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
    </section>
  );
};

