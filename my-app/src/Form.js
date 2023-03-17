import React from "react";
import useForm from "./useForm";

export default function Form() {
  const { username, password, handleChange } = useForm();
  return (
    <div>
      <input name="username" value={username} onChange={handleChange} />
      <input name="password" value={password} onChange={handleChange} />
    </div>
  );
}
