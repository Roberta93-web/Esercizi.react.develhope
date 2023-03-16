export default function GithunUser() {
  async function fetch() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
  }

  return <div></div>;
}
