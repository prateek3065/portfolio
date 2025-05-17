"use client";

import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CardScrollProgressIndicator: React.FC = () => {
  const heroCardScrollProgress = useSelector(
    (state: RootState) => state.common_slice.heroCardScrollProgress
  );
  useEffect(() => {
    console.log(
      "heroCaheroCardScrollProgressrdScrollTop",
      heroCardScrollProgress
    );
  }, [heroCardScrollProgress]);
  return (
    <span
      className="absolute top-0 left-0 h-[1px] bg-[#A594FD] rounded-full"
      style={{ width: heroCardScrollProgress * 100 + "%" }}
    ></span>
  );
};

export default CardScrollProgressIndicator;
