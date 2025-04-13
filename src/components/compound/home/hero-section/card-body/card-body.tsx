import AboutMeHeadlines from "./client/about-me-headlines/about-me-headlines";
import CardScrollProgressIndicator from "./client/card-scroll-progress-indicator/card-scroll-progress-indicator";
import MyProfilePhoto from "./my-profile-photo/my-profile-photo";

const CardBody: React.FC = () => {
  return (
    <div className="grow flex pb-[10px]">
      <div className="relative flex-grow-[229] shrink basis-0 flex flex-col-reverse md:flex-row justify-between gap-x-2 p-12">
        <div className="flex grow">
          <AboutMeHeadlines />
        </div>
        <div className="flex justify-center">
          <div className="">
            <MyProfilePhoto />
          </div>
        </div>
      </div>
      <div className="relative flex-grow-[15] shrink basis-0 max-w-[57px] min-w-[40px]">
        <div className="absolute w-full top-24 right-1 flex flex-col items-center gap-2">
          <span className="text-[12px] opacity-40"></span>
          <div className="w-[4px] h-[400px] bg-[#232323] relative rounded-full overflow-hidden">
            <CardScrollProgressIndicator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
