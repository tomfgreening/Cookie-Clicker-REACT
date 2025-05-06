export default function UpgradesTable({ cookieCost, decrease }) {
  return (
    <div>
      <button onClick={() => decrease(cookieCost)}>Upgrade 1 - 50 cookies </button>
      <button onClick={() => decrease(cookieCost)}>Upgrade 2 - 100 cookies </button>
      <button onClick={() => decrease(cookieCost)}>Upgrade 3 - 200 cookies </button>
    </div>
  );
}
