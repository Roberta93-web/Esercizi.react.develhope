import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(function increment() {
    setCount((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(function decrement() {
    setCount((c) => c - 1);
  }, []);

  const handleReset = useCallback(
    function reset() {
      setCount(initialValue);
    },
    [initialValue]
  );

  return {
    handleIncrement,
    handleDecrement,
    handleReset,
    count,
  };
}
