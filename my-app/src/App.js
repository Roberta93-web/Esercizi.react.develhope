import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import Hello from "./Hello";
import Login from "./Login";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={30} />
        <Counter initialValue={1} increment={1} timeout={1000} />
        <CounterDisplay />
        <ClickCounter />
        <Login onLogin={this.onLogin} />
      </div>
    );
  }
}
