import React from "react";

export default class ClickCounter extends React.Component {
  state = { count: 0 };
  handleButton = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButton}>Increment</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
