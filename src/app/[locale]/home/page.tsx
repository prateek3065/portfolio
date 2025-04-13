import HeroSection from "@/components/compound/home/hero-section/hero-section";

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
