import React, { Component } from "react";
import UncotrolledLogin from "./UncontrolledLogin";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        <UncotrolledLogin onLogin={this.onLogin} />
      </div>
    );
  }
}
