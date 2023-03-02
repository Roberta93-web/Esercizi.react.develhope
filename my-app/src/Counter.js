import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export default class Counter extends React.Component {
  componentDidMount(()=> {state = {
    count: this.props.initialValue,
  };
  setInterval(() => {
    this.setState((state) => {
      return { count: state.count + this.props.increment };
    });
  }, this.props.timeout);
}})
   
  render() {
    return <CounterDisplay counter={this.state.count} />;
  }
}
