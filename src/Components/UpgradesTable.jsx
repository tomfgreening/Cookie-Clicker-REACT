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
        "You do not have enough cookies to purchase this upgrade :("
      );
      setTimeout(() => {
        setNotEnoughCookiesMessage("");
      }, 4000);
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
    <div className="NotEnoughCookiesMessage">{notEnoughCookiesMessage}
    <div className="UpgradesTable">
      {UpgradeItems.map((item) => (
        <button className="UpgradesButtons" key={item.id} onClick={() => handleUpgrades(item)}>
          <h3>{item.name}</h3>
          <p className="UpgradeCost">{item.cost} cookies </p>
          <p className="UpgradeDescription">{item.description}</p>
        </button>
      ))}
    </div>
    </div>
  );
}
