import { useEffect, useRef } from "react";
import debounce from "../general-functions/debounce";

const useContainerPositionChange = (
  elementToBeObserved: HTMLElement | null,
  callback: () => void,
  isActive: boolean,
  delay: number = 300,
  triggerFirstCall: boolean = false
) => {
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive || !elementToBeObserved) {
      return;
    }

    const debouncedCallback = debounce(callback, delay, triggerFirstCall);
    let lastPosition = elementToBeObserved.getBoundingClientRect();

    const checkPosition = () => {
      const currentPosition = elementToBeObserved.getBoundingClientRect();
      if (
        currentPosition.x !== lastPosition.x ||
        currentPosition.y !== lastPosition.y ||
        currentPosition.width !== lastPosition.width ||
        currentPosition.height !== lastPosition.height
      ) {
        lastPosition = currentPosition;
        debouncedCallback();
      }
      animationFrameId.current = requestAnimationFrame(checkPosition);
    };
    checkPosition();

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [elementToBeObserved, callback, isActive, delay, triggerFirstCall]);
};

export default useContainerPositionChange;
