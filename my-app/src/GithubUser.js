import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState({});

  async function fetchGithubUSer(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 200) {
      const json = await response.json();

      setData(json);
    }
  }

  useEffect(() => {
    fetchGithubUSer(username);
  }, [username]);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}
