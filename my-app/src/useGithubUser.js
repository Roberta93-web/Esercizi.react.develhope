import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

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

  return data;
}
