import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({
  decrease,
  cookiesPerSecond,
  setCookiesPerSecond,
  totalCookieCount,
}) {
  function handleUpgrades(item) {
    if (totalCookieCount < item.cost) {
      console.log("you do not have enough cookies to purchase this upgrade.");
    } else {
      decrease(item.cost);
      if (item.id == 2) {
        setCookiesPerSecond(cookiesPerSecond * 2);
      }
      if (item.id == 1) {
        //  (cookiesPerClick placeholder);
      }
    }
  }

  return (
    <div>
      {UpgradeItems.map((item) => (
        <button key={item.id} onClick={() => handleUpgrades(item)}>
          {item.name} - {item.cost} cookies.
          {item.description}
        </button>
      ))}
    </div>
  );
}
