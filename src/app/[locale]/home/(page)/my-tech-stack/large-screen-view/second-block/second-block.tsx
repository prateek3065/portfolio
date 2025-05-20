import SecondBlockCardsContainer from "./second-block-cards-cotainer/second-block-cards-cotainer";
import SectionIntroText from "./section-intro-text/section-intro-text";

const SecondBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <SectionIntroText />
      <SecondBlockCardsContainer />
    </div>
  );
};
export default SecondBlock;
