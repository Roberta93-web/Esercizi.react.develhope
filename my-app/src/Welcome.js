import React, { Component } from "react";

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome, {props.name}</h1>
    </div>
  );
}
