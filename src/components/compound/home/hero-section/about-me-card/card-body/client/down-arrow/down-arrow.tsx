"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const DownArrow: React.FC = () => {
  const heroCardScrollProgress = useSelector((state: RootState) => {
    return state.common_slice.heroCardScrollProgress;
  });
  return (
    <>
      {heroCardScrollProgress < 1 ? (
        <div className="-lg flex size-12 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
          <svg
            className="size-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      ) : null}
    </>
  );
};
export default DownArrow;
