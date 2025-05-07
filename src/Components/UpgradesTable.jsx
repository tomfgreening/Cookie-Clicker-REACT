import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({ decrease }) {
  return (
    <div>
    {UpgradeItems.map((item) => (
      <button
      key={item.id}
      onClick={() => decrease(Number(item.cost))}>
        {item.name} - {item.cost} cookies.
        {item.description}
      </button>
    ))}
    </div>
  );
}
