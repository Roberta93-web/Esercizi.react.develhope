export default function Sum({ numbers }) {
  const sum = number.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1>The sum is: {sum}</h1>
    </div>
  );
}
