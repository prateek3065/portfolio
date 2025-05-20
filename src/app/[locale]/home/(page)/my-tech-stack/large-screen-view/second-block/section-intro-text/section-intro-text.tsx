import Star from "./star/star";

const SectionIntroText: React.FC = () => {
  return (
    <div className="flex flex-col text-white grow pl-10">
      <div className="max-w-[28rem] flex flex-col gap-y-2">
        <span className="flex gap-x-2 items-center text-[#A594FD]">
          <div>
            <Star sideLength={"1.25rem"} />
          </div>
          <div className="text-2xl">My Favorite Tools</div>
        </span>

        <div className="text-6xl font-extrabold tracking-wider">
          Unleash Creativity Like Never Before.
        </div>
      </div>
    </div>
  );
};
export default SectionIntroText;
