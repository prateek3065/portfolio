import WithRotationOnScroll from "@/components/compound/home/hero-section/about-me-card/client/with-rotation-on-scroll/with-rotation-on-scroll";
import CardHeader from "../card-header/card-header";
import CardBody from "../card-body/card-body";
import CardBackground from "../card-background/card-background-cover";

const AboutMeCard: React.FC = () => {
  return (
    <div
      className="h-[20rem] flex text-white pt-24 sm:pt-32 max-w-[1168px] perspective-[1000px] w-full px-2 sm:px-8"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      <WithRotationOnScroll>
        <div className="absolute flex flex-col top-0 left-0 h-[44rem] w-full z-20 overflow-hidden">
          <CardHeader />
          <CardBody />
        </div>
        <CardBackground />
      </WithRotationOnScroll>
    </div>
  );
};
export default AboutMeCard;
