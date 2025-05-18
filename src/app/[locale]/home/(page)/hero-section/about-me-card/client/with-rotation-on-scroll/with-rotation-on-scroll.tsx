"use client";

import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const WithRotationOnScroll: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const bodyScrollTop = useSelector(
    (state: RootState) => state.common_slice.bodyScrollTop
  );
  const [deg, setDeg] = useState<string>("0deg");
  useEffect(() => {
    setDeg(mapScrollToExponentialRotation(bodyScrollTop));
  }, [bodyScrollTop]);
  return (
    <div
      ref={ref}
      className="relative grow rounded-2xl"
      style={{
        // border: "1px solid #4d4d4d8c",

        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        // transform: "translate(0px, 0px)",
        perspective: "1000px",
        transformOrigin: "bottom center",
        transform: `rotateX(${deg})`,
        // opacity: 0,
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: "6.875rem",
      }}
    >
      {children}
    </div>
  );
};

export default WithRotationOnScroll;

function mapScrollToExponentialRotation(scrollTop: number): string {
  // Define input and output ranges
  const scrollRange = [0, 835];
  const angleRange = [0, -150];

  // Clamp the scrollTop within the defined range
  const clampedScroll = Math.max(
    scrollRange[0],
    Math.min(scrollRange[1], scrollTop)
  );

  // Normalize scroll position to [0, 1] range
  const normalized =
    (clampedScroll - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

  // Apply exponential easing (e.g., cubic for noticeable acceleration)
  const eased = Math.pow(normalized, 1.75); // Try different exponents (2, 2.5, 3)

  // Map to angle range
  const rotationAngle = angleRange[0] + eased * (angleRange[1] - angleRange[0]);

  return `${rotationAngle}deg`;
}
