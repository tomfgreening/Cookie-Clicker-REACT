import React from "react";
import { useState } from "react";
import CookieButton from "./Components/CookieButton";
import { useTimer } from "./useTimer";
import TotalCookies from "./Components/TotalCookies";
import UpgradesTable from "./Components/UpgradesTable";

export default function App() {
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const [cookieCount, setCookieCount] = useState(1);
  const [cookiesPerClick, setCookiesPerClick] = useState(1);
  useTimer({ setCookieCount, cookiesPerSecond });
  const totalCookieCount = cookieCount;
  function increase() {
    setCookieCount(cookieCount + cookiesPerClick);
  }
  function decrease(cookieCost) {
    setCookieCount(cookieCount - cookieCost);
  }
  return (
    <div>
      <TotalCookies totalCookieCount={totalCookieCount} />
      <CookieButton increase={increase} />
      <UpgradesTable
        decrease={decrease}
        cookiesPerClick={cookiesPerClick}
        setCookiesPerClick={setCookiesPerClick}
        cookiesPerSecond={cookiesPerSecond}
        setCookiesPerSecond={setCookiesPerSecond}
        totalCookieCount={totalCookieCount}
      />
    </div>
  );
}
