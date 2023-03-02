import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = {
    lastButton: "",
  };

  clickButton = (event) => {
    this.setState(() => {
      return { lastbutton: event.target.innerHTML };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>button 1</button>
        <button onClick={this.clickButton}>button 2</button>
        <button onClick={this.clickButton}>button 3</button>
        <h1>{this.state.lastButton}</h1>
      </div>
    );
  }
}
