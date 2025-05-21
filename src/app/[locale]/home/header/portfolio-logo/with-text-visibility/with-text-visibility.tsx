"use client";

import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type WithTextVisibilityProps = {
  children: React.ReactNode;
};
const WithTextVisibility: React.FC<WithTextVisibilityProps> = (props) => {
  const bodyScrollTop = useSelector((state: RootState) => {
    return state.common_slice.bodyScrollTop;
  });
  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 1,
  });
  useEffect(() => {
    if (bodyScrollTop > 100) {
      setStyle({
        opacity: 0,
      });
    } else {
      setStyle({
        opacity: 1,
      });
    }
  }, [bodyScrollTop]);
  return (
    <div className="transition-all duration-300" style={style}>
      {props.children}
    </div>
  );
};
export default WithTextVisibility;
