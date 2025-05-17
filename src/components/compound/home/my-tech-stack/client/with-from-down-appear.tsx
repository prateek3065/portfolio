"use client";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type WithFromDownAppearProps = {
  children: React.ReactNode;
};
const WithFromDownAppear: React.FC<WithFromDownAppearProps> = (props) => {
  const bodyTop = useSelector(
    (state: RootState) => state.common_slice.bodyScrollTop
  );
  const [styles, setStyles] = useState<React.CSSProperties>({
    top: "20rem",
  });
  useEffect(() => {
    console.log("bodyTop", bodyTop);
    if (bodyTop > 350) {
      setStyles({
        top: "-5rem",
      });
    }
    if (bodyTop < 314) {
      setStyles({
        top: "20rem",
      });
    }
  }, [bodyTop]);
  return (
    <div className="relative transition-all duration-700" style={styles}>
      {props.children}
    </div>
  );
};
export default WithFromDownAppear;
