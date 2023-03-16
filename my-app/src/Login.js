import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
    disabled: true,
  });

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function disabledButton() {
    return !(data.username && data.password);
  }

  return (
    <div>
      <input name="username" value={data.username} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.checked}
        onChange={handleChange}
      />
      <button
        disabled={disabledButton()}
        onClick={(event) => {
          event.preventDefault();
          onLogin(data);
        }}
      >
        Login
      </button>
    </div>
  );
}
