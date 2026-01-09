import { useCallback, useRef } from "react";

 const useThrottleScroll = (func, delay) => {
  const isThrottled = useRef(false);

  return useCallback((...args) => {
    if (isThrottled.current) return;

    func(...args);
    isThrottled.current = true;

    setTimeout(() => {
      isThrottled.current = false;
    }, delay);
  }, [func, delay]);
};


export  {useThrottleScroll};