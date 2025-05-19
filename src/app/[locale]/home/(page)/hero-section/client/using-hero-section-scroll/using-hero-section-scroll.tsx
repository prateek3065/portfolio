"use client";
import useThrottling from "@/common/hooks/useThrottling/useThrottling";
import { setHeroCardScrollProgress } from "@/redux/slices/common-slice";
import { RootState } from "@/redux/store";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UsingHeroSectionScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodyScrollTop = useSelector((state: RootState) => {
    return state.common_slice.bodyScrollTop;
  });
  const dispatch = useDispatch();

  const [styles, setStyles] = useState<React.CSSProperties>({
    overflow: "scroll",
  });

  const handleScroll = useThrottling({
    throttledFunction: (scrollTop: number) => {
      const container = containerRef.current;
      if (!container) return;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) return;

      const scrollProgress = scrollTop / maxScroll;
      if (scrollProgress > 1) {
        setStyles({
          overflow: "hidden",
        });
      } else if (bodyScrollTop < 0.1) {
        setStyles({
          overflow: "scroll",
        });
      }
      dispatch(setHeroCardScrollProgress(scrollProgress));
    },
    triggerFirstCall: true,
    delay: 10,
  });

  const onScroll = () => {
    const scrollTop = containerRef.current?.scrollTop ?? 0;
    handleScroll(scrollTop);
  };

  useEffect(() => {
    if (bodyScrollTop == 0) {
      setStyles({
        overflow: "scroll",
      });
    }
  }, [bodyScrollTop]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 w-full h-[100vh] overflow-scroll"
      style={{
        ...styles,
        zIndex: bodyScrollTop != 0 ? -20 : undefined,
        scrollbarWidth: "none",
      }}
      onScroll={onScroll}
    >
      <div className="absolute w-full h-[1300vh]"></div>
    </div>
  );
};

export default UsingHeroSectionScroll;
