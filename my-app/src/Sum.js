export default function Sum({ numbers = [1, 2, 5, 6, 7, 6] }) {
  const sum = numbers.reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1>The sum is: {sum}</h1>
    </div>
  );
}
