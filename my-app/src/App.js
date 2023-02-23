import "./App.css";
import React from "react";

function sayHello(name) {
  return <h1>Hello, {name}</h1>;
}

class App extends React.Component {
  render() {
    return sayHello("Roberta");
  }
}

export default App;
