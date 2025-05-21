import Image from "next/image";
import WithTextVisibility from "./with-text-visibility/with-text-visibility";
const PortfolioLogo: React.FC = () => {
  return (
    <div className="flex gap-x-2">
      <Image
        src="/assets/app-logo.svg"
        alt="logo"
        className="w-5 h-auto"
        width={10}
        height={0}
      />
      {/* <img src="/assets/app-logo.svg" alt="App Logo" /> */}
      <WithTextVisibility>
        <div className="text-xl pb-[3px] font-extrabold">Welcome</div>
      </WithTextVisibility>
    </div>
  );
};
export default PortfolioLogo;
