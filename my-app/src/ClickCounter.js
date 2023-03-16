import { useEffect, useState } from "react";

export default function ClickCounter({ initialValue = 0, onCounterChange }) {
  const [counter, setCounter] = useState(initialValue);
  function handleButton() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    onCounterChange(counter);
  }, [initialValue, onCounterChange]);

  return (
    <div>
      <button onClick={handleButton}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}
