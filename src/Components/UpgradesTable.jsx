import { UpgradeItems } from "../lib/data";

export default function UpgradesTable({
  decrease, cookiesPerSecond, setCookiesPerSecond, totalCookieCount}) {
    function handleUpgrades(item){
      if (totalCookieCount < item.cost){
        console.log;("you do not have enough cookies to purchase this upgrade.")
      } 
      else {
        decrease(item.cost);
        // upgrade functionality logic to go here.'
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