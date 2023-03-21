import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export default function Counter() {
  const { handleIncrement, handleDecrement, handleReset, count } = useCounter();

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
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
