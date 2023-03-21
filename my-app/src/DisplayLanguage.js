import React, { Component, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h1>The language is: {language}</h1>;
}
