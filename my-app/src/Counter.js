import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export default function Counter() {
  const { increment, decrement, reset, count } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
