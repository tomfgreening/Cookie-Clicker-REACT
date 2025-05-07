import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({ decrease }) {
  return (
    <div>
    {UpgradeItems.map((item) => (
      <button
      key={item.id}
  
      </button>
    ))}
    </div>
  );
}
