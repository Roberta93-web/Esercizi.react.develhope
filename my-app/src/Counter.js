import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.increment };
      });
    }, this.props.timeout);
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
