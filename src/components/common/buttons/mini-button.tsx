import Image from "next/image";

const MiniButton: React.FC<{
  imageScr: string;
}> = (props) => {
  return (
    <div className="relative flex w-[26px] hover:scale-[1.1] transition-transform delay-50 ease-in">
      <div className="flex items-center justify-center opacity-30 z-20 hover:cursor-pointer hover:opacity-95 w-[26px] transition-all delay-50 ease-in">
        <Image
          src={props.imageScr} // no need for `public/`
          alt="bg-img"
          width={12}
          height={12} // use actual height or use `fill`
          priority
        />
      </div>

      <div className="absolute h-full opacity-70 flex items-center">
        <Image
          src="/assets/hero-btn.png" // no need for `public/`
          alt="bg-img"
          width={1920}
          height={0} // use actual height or use `fill`
          priority
        />
      </div>
    </div>
  );
};

export default MiniButton;
