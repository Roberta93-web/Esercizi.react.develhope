import { useGithubUser } from "./useGithubUser";

export default function GithubUser({ username }) {
  const { data, loading, error, fetchGithubUSer } = useGithubUser();

  function handleFetch() {
    fetchGithubUSer(username);
  }

  return (
    <div>
      <button onClick={handleFetch}>Load user</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
