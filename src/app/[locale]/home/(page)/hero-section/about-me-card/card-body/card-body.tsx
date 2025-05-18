import CardBackground from "./card-background/card-background";
import AboutMeHeadlines from "./client/about-me-headline/about-me-headline";
import MyProfilePhoto from "./my-profile-photo/my-profile-photo";

const CardBody: React.FC = () => {
  return (
    <div className="relative flex flex-col pb-[10px] grow">
      <div className="relative z-20 flex-grow-[229] shrink basis-0 flex flex-col-reverse md:flex-row justify-between gap-x-2 p-12">
        <div className="flex grow">
          <AboutMeHeadlines />
        </div>
        <div className="flex justify-center">
          <div className="">
            <MyProfilePhoto />
          </div>
        </div>
      </div>
      <CardBackground />
    </div>
  );
};
export default CardBody;
