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
        <ClickCounter />
      </div>
    );
  }
}
