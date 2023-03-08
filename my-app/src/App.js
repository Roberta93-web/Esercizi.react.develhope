import React, { Component } from "react";
import Hello from "./Hello";
import Login from "./Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Login />
      </div>
    );
  }
}
