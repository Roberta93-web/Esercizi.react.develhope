import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <h1>The language is: {language}</h1>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
