import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const data = useGithubUser(username);

  return (
    <div>
      <h1>{data && data.name}</h1>
      <p>{data && data.following}</p>
      <img src={data && data.avatar_url} alt="avatar" />
    </div>
  );
}
