import "./App.css";
import React from "react";

function sum(a,b) {
  return <h2>{a+b}</h2>;
}

class App extends React.Component {
  render() {
    return sum(6,4);
  }
}

export default App;
