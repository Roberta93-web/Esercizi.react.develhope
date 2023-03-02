import React, { Component } from "react";
import Counter from "./Counter";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={30} />
        <Counter />
      </div>
    );
  }
}
