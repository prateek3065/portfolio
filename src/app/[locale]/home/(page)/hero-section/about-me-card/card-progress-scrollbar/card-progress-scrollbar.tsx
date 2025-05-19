import CardScrollProgressIndicator from "./client/card-scroll-progress-indicator/card-scroll-progress-indicator";

const CardScrollProgressBar: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-[12px] opacity-40"></span>
      <div className="w-full h-[1px] bg-[#232323] relative rounded-full overflow-hidden">
        <CardScrollProgressIndicator />
      </div>
    </div>
  );
};
export default CardScrollProgressBar;
