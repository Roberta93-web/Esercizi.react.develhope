import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// export default class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => {
//         return { count: state.count + this.props.increment };
//       });
//     }, this.props.timeout);
//   }

//   render() {
//     return <CounterDisplay counter={this.state.count} />;
//   }
// }

export default function Counter({ initialValue = 0, interval = 1000 }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
