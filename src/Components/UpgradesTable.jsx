import { useState } from "react";
import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({
  decrease,
  cookiesPerClick,
  setCookiesPerClick,
  cookiesPerSecond,
  setCookiesPerSecond,
  totalCookieCount,
}) {
  const [notEnoughCookiesMessage, setNotEnoughCookiesMessage] = useState("");
  function handleUpgrades(item) {
    if (totalCookieCount < item.cost) {
      setNotEnoughCookiesMessage(
        "you do not have enough cookies to purchase this upgrade."
      );
    } else {
      decrease(item.cost);
      if (item.id == 1) {
        setCookiesPerClick(cookiesPerClick + 2);
      }
      if (item.id == 2) {
        setCookiesPerSecond(cookiesPerSecond * 2);
      }
      if (item.id == 3) {
        setCookiesPerClick(cookiesPerClick + 10);
      }
    }
  }

  return (
    <div>
      <p>{notEnoughCookiesMessage}</p>
      {UpgradeItems.map((item) => (
        <button key={item.id} onClick={() => handleUpgrades(item)}>
          {item.name} - {item.cost} cookies.
          {item.description}
        </button>
      ))}
    </div>
  );
}
