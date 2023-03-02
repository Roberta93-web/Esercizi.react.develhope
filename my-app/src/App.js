import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={30} />
        <Counter initialValue={1} increment={1} timeout={1000} />
        <CounterDisplay />
        <ClickCounter />
      </div>
    );
  }
}
