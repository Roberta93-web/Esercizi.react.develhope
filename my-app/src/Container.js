import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
