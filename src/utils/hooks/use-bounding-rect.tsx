import { useEffect, RefObject } from "react";
import debounce from "@/utils/general-functions/debounce";

type UseBoundingRectProps = {
  ref: RefObject<HTMLElement | null> | HTMLElement | null;
  callback: (rect: DOMRect) => void;
  isActive: boolean;
  delay?: number;
};

const useBoundingRect = ({
  ref,
  callback,
  isActive,
  delay = 300,
}: UseBoundingRectProps) => {
  useEffect(() => {
    if (!isActive) return;

    const getElement = () => {
      if (!ref) return null;
      return ref instanceof HTMLElement ? ref : ref.current;
    };

    const element = getElement();
    if (!element) return;

    const handle = () => {
      const rect = element.getBoundingClientRect();
      callback(rect);
    };

    const debouncedHandle = debounce(handle, delay);

    // Set up all event listeners
    const events = ["scroll", "resize", "orientationchange"];
    events.forEach((event) => window.addEventListener(event, debouncedHandle));

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(debouncedHandle);
    resizeObserver.observe(element);

    // Initial measurement
    handle();

    return () => {
      // Clean up all event listeners
      events.forEach((event) =>
        window.removeEventListener(event, debouncedHandle)
      );
      resizeObserver.disconnect();
    };
  }, [ref, isActive, callback, delay]);
};

export default useBoundingRect;
