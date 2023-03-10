import React, { Component } from "react";
import Hello from "./Hello";
import UncontrolledLogin from "./UncontrolledLogin";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        <Hello />
        <UncontrolledLogin onLogin={this.onLogin} />
      </div>
    );
  }
}
