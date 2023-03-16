import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import Hello from "./Hello";
import Login from "./Login";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <Hello />
        <Counter initialValue={1} increment={1} timeout={1000} />
        <CounterDisplay />
        <ClickCounter />
        <Login onLogin={this.onLogin} />
      </div>
    );
  }
}
