import WithOnScrollRetardation from "./client/with-on-scroll-retardation/with-on-scroll-retardation";
import NextJs from "./next-js/next-js";

const SecondBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <WithOnScrollRetardation>
        <NextJs />
      </WithOnScrollRetardation>
    </div>
  );
};
export default SecondBlock;
