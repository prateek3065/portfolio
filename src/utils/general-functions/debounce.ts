const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number = 300,
  triggerFirstCall = false
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  let iCount = 0;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const [value] = args;

    if (triggerFirstCall && iCount === 0) {
      func.apply(this, [value]);
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (!triggerFirstCall) {
        func.apply(this, [value]);
      }
      iCount = 0;
    }, delay);

    iCount++;
  };
};

export default debounce;
