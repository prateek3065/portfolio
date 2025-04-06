import { useEffect } from "react";
import debounce from "../general-functions/debounce";

const useOnScroll = (
  elementToBeObserved: HTMLElement,
  callback: () => void,
  isActive: boolean,
  delay: number = 300,
  triggerFirstCall: boolean = false
) => {
  useEffect(() => {
    if (!isActive || !elementToBeObserved) return;
    const debouncedScrollHandler = debounce(callback, delay, triggerFirstCall);
    elementToBeObserved.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      elementToBeObserved.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [elementToBeObserved, callback, isActive, delay, triggerFirstCall]);
};

export default useOnScroll;
