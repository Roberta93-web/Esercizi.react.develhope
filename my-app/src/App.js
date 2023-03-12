import React, { Component } from "react";
import Container from "./Container";
import Hello from "./Hello";
import Login from "./Login";
import TodoList from "./TodoList";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };

  renderProps = (items, remove) => {
    console.log(items);
    return items.map((item, index) => {
      return (
        <li key={item + index}>
          {item}
          <button
            onClick={() => {
              remove(index);
            }}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <Container title={"Title Prop"}>
          <Hello />
          <Login />
          {/* <Welcome name="John" age={30} /> */}
        </Container>
        <TodoList render={this.renderProps} />
      </div>
    );
  }
}
