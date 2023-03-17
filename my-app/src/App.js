import React, { Component } from "react";
import Counter from "./Counter";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import Hello from "./Hello";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Counter />
        {/* <GithubUser username="Roberta93-web" /> */}
        <GithubUserList unsername="user" />
      </div>
    );
  }
}
