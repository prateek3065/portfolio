import Star from "./star/star";

type SectionIntroTextProps = {
  line1: string; //Top Recommendations
  line2: string; //Endorsements from Industry Leaders.
};
const SectionIntroText: React.FC<SectionIntroTextProps> = (props) => {
  return (
    <div className="flex flex-col text-white grow lg:pl-40">
      <div className="max-w-[28rem] flex flex-col gap-y-2">
        <span className="flex gap-x-2 items-center text-[#A594FD]">
          <div>
            <Star sideLength={"1.25rem"} />
          </div>
          <div className="text-2xl">{props.line1}</div>
        </span>

        <div className="text-6xl font-extrabold tracking-wider">
          {props.line2}
        </div>
      </div>
    </div>
  );
};
export default SectionIntroText;
