import { useEffect, useState } from "react";

/**
 * Use debounce hook used to debounce a value
 * see more complete example https://usehooks-ts.com/react-hook/use-debounce
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // create a timeout id with which to clear the timeout if the useEffect is triggered before the delay has elapsed
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay || 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}
