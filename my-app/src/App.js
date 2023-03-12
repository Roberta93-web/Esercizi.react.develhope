import React, { Component } from "react";
import Container from "./Container";
import Hello from "./Hello";
import Login from "./Login";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };
  render() {
    return (
      <div>
        <Container title={"Title Prop"}>
          <Hello />
          <Login />
          {/* <Welcome name="John" age={30} /> */}
        </Container>
      </div>
    );
  }
}
