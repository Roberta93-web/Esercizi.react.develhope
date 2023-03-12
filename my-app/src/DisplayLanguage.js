import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

export default class DisplayLanguage extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => {
          return <div>The language is: {language}</div>;
        }}
      </LanguageContext.Consumer>
    );
  }
}
