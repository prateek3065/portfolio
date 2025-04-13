"use client";

import { setHeroCardScrollProgress } from "@/redux/slices/common-slice";
import { RootState } from "@/redux/store";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UsingHeroSectionScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodyScrollTop = useSelector((state: RootState) => {
    return state.common_slice.bodyScrollTop;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;

        const scrollProgress = scrollTop / (scrollHeight - clientHeight);
        dispatch(setHeroCardScrollProgress(scrollProgress));
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 w-full h-[44rem] overflow-scroll scrollbar-hide"
      style={{ zIndex: bodyScrollTop != 0 ? -20 : undefined }}
    >
      <div className="absolute w-full h-[1300vh]"></div>
    </div>
  );
};

export default UsingHeroSectionScroll;
