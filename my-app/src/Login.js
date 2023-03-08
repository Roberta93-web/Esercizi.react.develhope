import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
    disabled: true,
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.value;

    this.setState(() => ({
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
