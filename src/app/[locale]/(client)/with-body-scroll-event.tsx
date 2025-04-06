"use client";
import { setBodyScrollTop } from "@/redux/slices/common-slice";
import debounce from "@/utils/general-functions/debounce";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

const WithBodyScrollEvent: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const dispatch = useDispatch();

  const debouncedScroll = useMemo(() => {
    return debounce(
      (scrollTop: number) => {
        dispatch(setBodyScrollTop(scrollTop));
      },
      10,
      false
    );
  }, [dispatch]);

  const handleScroll = useCallback(
    (e: any) => {
      const scrollTop = e.currentTarget.scrollTop;
      debouncedScroll(scrollTop);
    },
    [debouncedScroll]
  );

  return (
    <body
      className="h-screen overflow-auto overflow-x-hidden bg-black"
      onScroll={handleScroll}
    >
      {props.children}
    </body>
  );
};

export default WithBodyScrollEvent;
