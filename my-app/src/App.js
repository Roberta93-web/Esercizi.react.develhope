import React, { Component } from "react";
import Hello from "./Hello";
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
      </div>
    );
  }
}
