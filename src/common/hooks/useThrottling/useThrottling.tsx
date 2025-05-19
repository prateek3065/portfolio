import { useEffect, useRef } from "react";

type UseThrottlingProps<T = any> = {
  throttledFunction: (props: T) => any;
  delay?: number;
  triggerFirstCall?: boolean;
};

function useThrottling<T = any>({
  throttledFunction,
  delay = 1000,
  triggerFirstCall = false,
}: UseThrottlingProps<T>) {
  const lastCallRef = useRef<number>(0);
  const pendingArgsRef = useRef<T | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const call = (args: T) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallRef.current;

    if (timeSinceLastCall >= delay) {
      throttledFunction(args);
      lastCallRef.current = now;
    } else {
      pendingArgsRef.current = args;

      if (!timeoutRef.current) {
        const remaining = delay - timeSinceLastCall;

        timeoutRef.current = setTimeout(() => {
          if (pendingArgsRef.current !== null) {
            throttledFunction(pendingArgsRef.current);
            lastCallRef.current = Date.now();
            pendingArgsRef.current = null;
          }

          timeoutRef.current = null;
        }, remaining);
      }
    }
  };

  useEffect(() => {
    if (triggerFirstCall) {
      lastCallRef.current = 0;
    } else {
      lastCallRef.current = Date.now();
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [triggerFirstCall]);

  return call;
}
export default useThrottling;
