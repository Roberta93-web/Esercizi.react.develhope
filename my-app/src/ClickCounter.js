// import React from "react";

import { useState } from "react";

// export default class ClickCounter extends React.Component {
//   state = { count: 0 };
//   handleButton = () => {
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleButton}>Increment</button>
//         <h1>{this.state.count}</h1>
//       </div>
//     );
//   }
//}

export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  function handleButton() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={handleButton}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}
