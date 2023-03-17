import React, { Component } from "react";
import Counter from "./Counter";
import Form from "./Form";
import GithubUser from "./GithubUser";
import Hello from "./Hello";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Counter />
        <GithubUser username="Roberta93-web" />
        <Form />
      </div>
    );
  }
}
