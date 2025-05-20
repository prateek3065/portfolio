import { useTranslations } from "next-intl";
import WithFromDownAppear from "./client/with-from-drop-down-appear/with-from-down-appear";
import WithContainer from "../with-container/with-container";
import NextJsLogo from "./next-js-logo/next-js-logo";
import BootstrapLogo from "./bootstrap-logo/bootstrap-logo";
import TailwindCssLogo from "../tailwind-css-logo/tailwind-css-logo";
import ReactLogo from "./react-logo/react-logo";
import ReduxLogo from "./redux-logo/redux-logo";
import TypescriptLogo from "../typescript-logo/typescript-logo";
import JavascripLogo from "./javascript-logo/javascript-logo";
import AWSLogo from "./aws-logo/aws-logo";
import GoogleAnalyticsLogo from "./google-analytics-logo/google-analytics-logo";
import NodeJsLogo from "./nodejs-logo/nodejs-logo";
import FigmaLogo from "./figma-logo/figma-logo";
import HTMLLogo from "./html-logo/html-logo";
import NextIntlLogo from "./next-intl-logo/next-intl-logo";

const SmallScreenView: React.FC = () => {
  const t = useTranslations();
  return (
    <div className="w-full md:hidden">
      <WithFromDownAppear>
        <div className="text-white text-6xl font-extrabold w-full text-center flex flex-col items-center">
          <div>{t("COMMON.WHAT_I_BUILD")}</div>
          <div className="flex items-center justify-center mt-10 gap-4 flex-wrap max-w-[40rem]">
            <WithContainer height="4rem" width="10rem">
              <NextJsLogo />
            </WithContainer>
            <WithContainer>
              <BootstrapLogo />
            </WithContainer>
            <WithContainer>
              <TailwindCssLogo />
            </WithContainer>
            <WithContainer>
              <ReactLogo />
            </WithContainer>
            <WithContainer height="5rem">
              <ReduxLogo />
            </WithContainer>
            <WithContainer>
              <TypescriptLogo />
            </WithContainer>
            <WithContainer>
              <JavascripLogo />
            </WithContainer>
            <WithContainer>
              <AWSLogo />
            </WithContainer>
            <WithContainer>
              <GoogleAnalyticsLogo />
            </WithContainer>
            <WithContainer>
              <NodeJsLogo />
            </WithContainer>
            <WithContainer>
              <FigmaLogo />
            </WithContainer>
            <WithContainer>
              <HTMLLogo />
            </WithContainer>
            <WithContainer>
              <NextIntlLogo />
            </WithContainer>
          </div>
        </div>
      </WithFromDownAppear>
    </div>
  );
};
export default SmallScreenView;
