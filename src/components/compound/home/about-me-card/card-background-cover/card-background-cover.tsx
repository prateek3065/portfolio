import Image from "next/image";
const CardBackgroundCover: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center h-[44rem] w-full">
      <Image
        src="/assets/hero.png" // no need for `public/`
        alt="bg-img"
        width={1920}
        height={0} // use actual height or use `fill`
        priority
      />
    </div>
  );
};
export default CardBackgroundCover;
