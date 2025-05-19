"use client";

import { _signOut } from "../server-actions/signout";
import LocaleSelector from "./locale-selector/locale-selector";

type PopUpProps = {
  email: string;
  name: string;
};
const PopUp: React.FC<PopUpProps> = (props) => {
  const handleSignOut = async () => {
    _signOut();
  };
  return (
    <div className="w-35 h-40 flex flex-col justify-between border border-[#8080804a] rounded-xl bg-black py-4 px-3">
      <div className="text-white">{props.name}</div>
      <LocaleSelector />
      <button
        className="hover w-full flex justify-center hover:cursor-pointer bg-white text-black text-sm p-1 border-2 border-[#8080804a] rounded-xl transition-all duration-200"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};
export default PopUp;
