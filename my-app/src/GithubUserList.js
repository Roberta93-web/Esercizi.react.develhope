import React, { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");

  function handleChange(event) {
    setUsername(event.value);
  }

  function addListUser() {
    setUserList((userList) => {
      return [...userList, username];
    });
  }

  return (
    <div>
      <input name="username" value={username} onChange={handleChange} />
      <button onClick={addListUser}>Add</button>
      {userList.map((user) => {
        return <GithubUser key={user} username={username} />;
      })}
    </div>
  );
}
