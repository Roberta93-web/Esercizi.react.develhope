import React, { Component } from "react";

export default class TodoList extends Component {
  inputRef = React.createRef();
  state = {
    items: ["Fare la spesa", "Cucinare", "Lavorare", "Allenamento"],
  };

  hanldeAddItem = () => {
    this.setState((prevState) => {
      const value = this.inputRef.current.value;
      this.inputRef.current.value = "";
      return {
        items: [...prevState.items, value],
      };
    });
  };

  handleReset = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.hanldeAddItem}>Add item</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
