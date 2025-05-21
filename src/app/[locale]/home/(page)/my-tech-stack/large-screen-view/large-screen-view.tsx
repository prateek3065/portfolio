import SectionIntroText from "../../common/section-intro-text/section-intro-text";
import Aws from "./aws/aws";
import FirstBlock from "./first-block/first-block";
import FourthBlock from "./fourth-block/fourth-block";
import GoogleAnalytics from "./google-analytics/google-analytics";
import Javascript from "./javascript/javascript";
import NextIntl from "./next-intl/next-intl";
import ReactLogo from "./react-logo/react-logo";
import SecondBlock from "./second-block/second-block";
import Tailwind from "./tailwind/tailwind";
import ThirdBlock from "./third-block/third-block";
import Typescript from "./typescript/typescript";

const LargeScreenView: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-col md:w-full gap-y-8 pt-[8rem]">
      <SectionIntroText
        line1="My Favorite Tools"
        line2=" Unleash Creativity Like Never Before."
      />
      <div className="w-full flex justify-center flex-wrap gap-x-8 pt-[4.5rem]">
        <FirstBlock />
        <SecondBlock />
        <div className="flex flex-col gap-x-6 items-center flex-wrap justify-center">
          <Typescript />
        </div>
        <div className="flex flex-col gap-x-6 items-center flex-wrap ">
          <Tailwind />
          <ReactLogo />
          <Javascript />
        </div>
        <div className="flex flex-col gap-y-2 items-center flex-wrap">
          <Aws />
          <NextIntl />
          <GoogleAnalytics />
        </div>
        <ThirdBlock />
        <FourthBlock />
      </div>
    </div>
  );
};

export default LargeScreenView;
