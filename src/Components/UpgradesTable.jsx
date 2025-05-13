import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({ decrease, cookiesPerSecond, setCookiesPerSecond, totalCookieCount}) {
  return (
    <div>
      {UpgradeItems.map((item) => (
        <button key={item.id} onClick={() => decrease(item.cost)}>
          {item.name} - {item.cost} cookies.
          {item.description}
        </button>
      ))}
    </div>
  );
}
