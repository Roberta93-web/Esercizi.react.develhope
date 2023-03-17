import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export default function Counter() {
  const { increment, decrement, reset, count } = useCounter();

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     console.log("inizio");
  //     setCount((c) => c + 1);
  //   }, 1000);
  //   return () => {
  //     console.log("cancellato");
  //     clearInterval(intervalId);
  //   };
  // }, []); // non si mette la dipendeza in questo caso altrimenti si crea un loop, perchè continua a renderizzarsi ogni volta che count cambia

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
