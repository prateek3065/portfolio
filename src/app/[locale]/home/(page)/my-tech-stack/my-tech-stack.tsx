import LargeScreenView from "./large-screen-view/large-screen-view";
import SmallScreenView from "./small-screen-view/small-screen-view";

const MyTechStack: React.FC = () => {
  return (
    <section className="relative transition-all duration-150 ease-in pt-15 px-2 sm:px-4 md:px-0">
      <SmallScreenView />
      <LargeScreenView />
    </section>
  );
};

export default MyTechStack;
