import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then.apply((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useState(null);

  const response = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { data, error, isLoad: !data && !error };
}
