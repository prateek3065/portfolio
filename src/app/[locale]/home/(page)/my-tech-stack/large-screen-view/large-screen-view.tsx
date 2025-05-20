import FirstBlock from "./first-block/first-block";
import FourthBlock from "./fourth-block/fourth-block";
import SecondBlock from "./second-block/second-block";
import ThirdBlock from "./third-block/third-block";

const LargeScreenView: React.FC = () => {
  return (
    <div className="hidden md:block md:w-full">
      <div className="w-full flex justify-center flex-wrap">
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
      </div>
    </div>
  );
};
export default LargeScreenView;
