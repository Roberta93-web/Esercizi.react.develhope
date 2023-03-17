import React, { useState } from "react";

export default function useForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const [name, value] = event.value;
    setData((d) => ({
      ...data,
      [name]: value,
    }));
  }
  return {
    ...data,
    handleChange,
  };
}
