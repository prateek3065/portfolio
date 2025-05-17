import WithRotationOnScroll from "@/components/compound/home/hero-section/about-me-card/client/with-rotation-on-scroll/with-rotation-on-scroll";
import CardHeader from "./card-header/card-header";
import CardBody from "./card-body/card-body";
import CardScrollProgressIndicator from "./card-body/client/card-scroll-progress-indicator/card-scroll-progress-indicator";

const AboutMeCard: React.FC = () => {
  return (
    <div
      className="h-[20rem] flex text-white pt-24 sm:pt-32 max-w-[1168px] perspective-[1000px] w-full px-2 sm:px-8 md:px-12 lg:px-16"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      <WithRotationOnScroll>
        {/* <div className="absolute flex flex-col top-0 left-0 h-[44rem] w-full z-20 overflow-hidden">
          <CardHeader />
          <CardBody />
        </div> */}
        {/* <CardBackground /> */}
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

const CardScrollProgressBar: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-[12px] opacity-40"></span>
      <div className="w-full h-[1px] bg-[#232323] relative rounded-full overflow-hidden">
        <CardScrollProgressIndicator />
      </div>
    </div>
  );
};

const Background: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      id="bg"
      className="h-[40rem] overflow-hidden w-full max-w-[70rem] border-2 rounded-2xl border-[#8080804a] bg-black absolute top-0"
    >
      {props.children}
    </div>
  );
};
export default AboutMeCard;
