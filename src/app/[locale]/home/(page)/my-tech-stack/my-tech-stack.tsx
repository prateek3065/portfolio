import BootstrapLogo from "./bootstrap-logo/bootstrap-logo";
import WithFromDownAppear from "./client/with-from-drop-down-appear/with-from-down-appear";
import JavascripLogo from "./javascript-logo/javascript-logo";
import NextJsLogo from "./next-js-logo/next-js-logo";
import ReactLogo from "./react-logo/react-logo";
import ReduxLogo from "./redux-logo/redux-logo";
import TailwindCssLogo from "./tailwind-css-logo/tailwind-css-logo";
import TypescriptLogo from "./typescript-logo/typescript-logo";
import WithContainer from "./with-container/with-container";

const MyTechStack: React.FC = () => {
  return (
    <section className="w-full relative transition-all duration-150 ease-in pt-15 px-2 sm:px-4 md:px-6 lg:px-8">
      <WithFromDownAppear>
        <div className="text-white text-6xl font-extrabold w-full text-center flex flex-col items-center">
          <div> What I Build With</div>
          <div className="flex items-center justify-center mt-10 gap-4 flex-wrap max-w-[32rem]">
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
          </div>
        </div>
      </WithFromDownAppear>
    </section>
  );
};

export default MyTechStack;
