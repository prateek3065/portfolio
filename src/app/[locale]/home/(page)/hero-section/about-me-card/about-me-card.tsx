import CardHeader from "./card-header/card-header";
import WithRotationOnScroll from "./client/with-rotation-on-scroll/with-rotation-on-scroll";
import Background from "./background/background";
import CardScrollProgressBar from "./card-progress-scrollbar/card-progress-scrollbar";
import CardBody from "./card-body/card-body";

const AboutMeCard: React.FC = () => {
  return (
    <div
      className="h-[20rem] flex text-white pt-12 sm:pt-32 max-w-[1168px] perspective-[1000px] w-full px-2 sm:px-8 md:px-12 lg:px-16"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      <WithRotationOnScroll>
        <Background>
          <div className="absolute flex flex-col top-0 left-0 h-full w-full z-20 overflow-hidden">
            <CardHeader />
            <CardScrollProgressBar />
            <CardBody />
          </div>
        </Background>
      </WithRotationOnScroll>
    </div>
  );
};

export default AboutMeCard;
