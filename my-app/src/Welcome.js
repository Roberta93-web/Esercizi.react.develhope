import React, { Component } from "react";
import Age from "./Age";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        {(
          this.props.age >= 18 &&
          this.props.age <= 65 &&
          this.props.name === "John"
        )(<Age age={this.props.age} />)}
      </div>
    );
  }
}
