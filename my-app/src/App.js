import React, { Component } from "react";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import Hello from "./Hello";
import { LanguageContext } from "./LanguageContext";
import Login from "./Login";
import Welcome from "./Welcome";

export default class App extends Component {
  onLogin = (state) => {
    console.log(state);
  };

  state = {
    language: "en",
  };

  handleChangeLanguage = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleChangeLanguage}
        >
          <option value="en">INGLESE</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
