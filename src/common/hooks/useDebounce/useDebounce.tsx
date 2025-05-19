import { useEffect, useRef } from "react";

type UseDebounceProps<T = any> = {
  debounceFunction: (props: T) => any;
  delay?: number;
  triggerFirstCall?: boolean; // Ignored in debounce, but supported for parity
};

function useDebounce<T = any>({
  debounceFunction,
  delay = 300,
}: UseDebounceProps<T>) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const call = (args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      debounceFunction(args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return call;
}

export default useDebounce;
