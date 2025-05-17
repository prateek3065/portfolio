import AboutMeHeadlines from "./client/about-me-headlines/about-me-headlines";
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

      {/* <div className="absolute w-full flex justify-center bottom-20">
        <DownArrow />
      </div> */}
      <CardBackground />
    </div>
  );
};

// create array of number from 0 to 1000000

const CardBackground: React.FC = () => {
  return (
    <div className="absolute top-0 w-full h-full p-[10px] overflow-hidden">
      <div
        className="w-full h-full rounded-lg"
        style={{
          background: "linear-gradient(to bottom right, #1d1d1d, #000000)",
        }}
      >
        {/* <div className="h-full w-full flex flex-wrap gap-2">
          {arr.map((index) => {
            return (
              <div
                key={index}
                className="relative top-4 left-4 w-1 h-1 bg-[#80808021] rounded-full"
              ></div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default CardBody;
