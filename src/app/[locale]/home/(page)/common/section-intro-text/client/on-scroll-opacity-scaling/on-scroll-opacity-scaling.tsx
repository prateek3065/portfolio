"use client";
import { InViewDetails, useInView } from "next-client-utils";
import { useCallback, useRef, useState } from "react";

type WithOnScrollAppearProps = {
  children: React.ReactNode;
};
const WithOnScrollAppear: React.FC<WithOnScrollAppearProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewCallback = useCallback((details: InViewDetails) => {
    if (details.isInView) {
      setStyle((prev) => {
        return { ...prev, opacity: 1 };
      });
    } else {
      setStyle((prev) => {
        return { ...prev, opacity: 0 };
      });
    }
  }, []);

  useInView({
    elementToBeObserved: ref,
    callback: inViewCallback,
    isActive: true,
    options: {
      threshold: 0.3,
    },
  });

  const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0 });

  return (
    <div className="transition-all duration-700" ref={ref} style={style}>
      {props.children}
    </div>
  );
};
export default WithOnScrollAppear;
