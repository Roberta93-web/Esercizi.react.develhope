import { useState } from "react";

export default function ClickCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleButton() {
    setCounter((c) => c + 1);
  }
  return (
    <div>
      <button onClick={handleButton}>Increment</button>
      <h1>{counter}</h1>
    </div>
  );
}
