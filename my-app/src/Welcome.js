import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("./login");
  }
  return (
    <div>
      <h1>Welcome, {props.name}</h1>
      <button onClick={handleClick}>Enter the app</button>
    </div>
  );
}
