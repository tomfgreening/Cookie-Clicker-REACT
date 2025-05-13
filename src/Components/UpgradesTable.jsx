import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({ decrease, cookiesPerSecond, setCookiesPerSecond }) {
  return (
    <div>
    {UpgradeItems.map((item) => (
      <button
      key={item.id}
      onClick={if cookie () => decrease(item.cost)}>
        {item.name} - {item.cost} cookies.
        {item.description}
      </button>
    ))}
    </div>
  );
}
