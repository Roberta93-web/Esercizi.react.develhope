import React, { Component, useState } from "react";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import Hello from "./Hello";
import { LanguageContext } from "./LanguageContext";
import Login from "./Login";
import Welcome from "./Welcome";

export default function App() {
  const [language, setLanguage] = useState("en");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div class="border-2 border-rose-500">
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">INGLESE</option>
        <option value="it">ITALIANO</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}
