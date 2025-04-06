import WithRotationOnScroll from "@/app/[locale]/home/(client)/with-rotation-on-scroll";
import CardHeader from "./card-header/card-header";
import CardBody from "./card-body/card-body";
import CardBackground from "./card-background-cover/card-background-cover";

const AboutMeCard: React.FC = () => {
  return (
    <div
      className="h-[20rem] flex text-white pt-32 max-w-[1168px] perspective-[1000px] w-full px-2 sm:px-8"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      <WithRotationOnScroll>
        <div className="absolute flex flex-col top-0 left-0 h-[44rem] w-full z-20">
          <CardHeader />
          <CardBody />
        </div>
        <CardBackground />
      </WithRotationOnScroll>
    </div>
  );
};
export default AboutMeCard;
