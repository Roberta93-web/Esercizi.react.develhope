import React, { Component } from "react";
import Hello from "./Hello";
import TodoList from "./TodoList";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        <Hello />
        <TodoList />
      </div>
    );
  }
}
