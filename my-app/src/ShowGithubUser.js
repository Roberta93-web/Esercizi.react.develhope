import React from "react";
import { useParams } from "react-router-dom";
import GithunUser from "./GithubUser";

export default function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <GithunUser username={username} />
    </div>
  );
}
