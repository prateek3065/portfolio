import MyProfilePhoto from "./my-profile-photo/my-profile-photo";

const CardBody: React.FC = () => {
  return (
    <div className="grow flex px-[10px] pb-[10px]">
      <div className="relative grow flex flex-col-reverse md:flex-row justify-between p-8 gap-x-2">
        <div className="flex grow">
          <div className="flex flex-col pt-3 gap-y-4">
            <WelcomeText />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <MyProfilePhoto />
          </div>
        </div>
      </div>
      <div className="grow max-w-[57px]"></div>
    </div>
  );
};

export default CardBody;

const WelcomeText: React.FC = () => {
  return (
    <>
      <div
        className="text-lg px-4 p-1 rounded-2xl max-w-[310px]"
        style={{ backgroundColor: "rgb(112 83 255)" }}
      >
        Hi, let&lsquo;s build something beautiful.
      </div>
      <div className="text-4xl sm:text-5xl md:text-6xl max-w-[40rem]">
        I craft seamless, responsive websites that deliver an exceptional user
        experience.
      </div>
    </>
  );
};
