import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>{count}</h1>;
}
