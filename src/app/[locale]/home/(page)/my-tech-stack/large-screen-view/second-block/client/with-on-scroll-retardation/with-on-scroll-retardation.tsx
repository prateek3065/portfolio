"use client";

import { RootState } from "@/redux/store";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useInView, InViewDetails } from "next-client-utils";

type WithOnScrollRetardationProps = {
  children: React.ReactNode;
  direction?: "default" | "reverse";
  retardationValue?: number;
};
const WithOnScrollRetardation: React.FC<WithOnScrollRetardationProps> = (
  props
) => {
  const { direction = "default", retardationValue = 20 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [referenceScrollValue, setReferenceScrollValue] = useState<
    undefined | number
  >(undefined);
  const bodyScrollTop = useSelector(
    (state: RootState) => state.common_slice.bodyScrollTop
  );
  const inViewCallback = useCallback(
    (details: InViewDetails) => {
      console.log("isInView", details);
      if (details.isInView) setReferenceScrollValue(bodyScrollTop);
      else setReferenceScrollValue(undefined);
    },
    [setReferenceScrollValue, bodyScrollTop]
  );

  useInView({
    elementToBeObserved: ref,
    callback: inViewCallback,
    options: {
      threshold: 0.05,
    },
    isActive: true,
    triggerFirstCall: true,
  });

  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    if (referenceScrollValue != undefined) {
      const top =
        ((direction == "default" ? 1 : -1) *
          (bodyScrollTop - referenceScrollValue)) /
        retardationValue;
      setTop(top);
    } else {
      // setTop(0);
    }
  }, [bodyScrollTop, referenceScrollValue, direction, retardationValue]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", top: top }}
      className="transition-all duration-75"
    >
      {props.children}
    </div>
  );
};
export default WithOnScrollRetardation;
