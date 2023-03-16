import React, { Component } from "react";
import Sum from "./Sum";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div className="border-solid border-2 border-sky-500">
      <Welcome name="Roberta" />
      <Sum />
    </div>
  );
}
