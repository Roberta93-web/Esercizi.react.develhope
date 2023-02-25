import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>"Roberta"</strong>} age={30} />
      </div>
    );
  }
}
