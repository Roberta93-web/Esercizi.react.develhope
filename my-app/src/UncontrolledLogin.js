import React, { Component } from "react";

export default class UncontrolledLogin extends Component {
  _formRef = React.createRef();

  controllInputButton = () => {
    if (
      this._formRef.current.elements.username.value &&
      this._formRef.current.elements.password.value
    ) {
      this._formRef.current.elements.login.disabled = false;
    } else {
      this._formRef.current.elements.login.disabled = true;
    }
  };

  componentDidMount() {
    this._formRef.current.elements.username.focus();
  }

  render() {
    return (
      <div>
        <form ref={this._formRef}>
          <input name="username" onChange={this.controllInputButton} />
          <input
            name="password"
            type="password"
            onChange={this.controllInputButton}
          />
          <input name="remember" type="checkbox" />

          <button
            type="submit"
            name="login"
            onClick={(event) => {
              event.preventDefault();
              this.props.onLogin("some text");
            }}
          >
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
