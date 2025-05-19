import React from "react";
import { useState } from "react";
import CookieButton from "./Components/CookieButton";
import { useTimer } from "./useTimer";
import TotalCookies from "./Components/TotalCookies";
import UpgradesTable from "./Components/UpgradesTable";

export default function App() {
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const [cookieCount, setCookieCount] = useState(1);
  useTimer({ setCookieCount, cookiesPerSecond });
  const totalCookieCount = cookieCount;
  function increase() {
    setCookieCount(cookieCount + 1);
  }
  function decrease(cookieCost) {
    setCookieCount(cookieCount - cookieCost);
  }
  return (
    <div>
      <TotalCookies totalCookieCount={totalCookieCount} />
      <CookieButton increase={increase} />
      <UpgradesTable
        increase={increase}
        decrease={decrease}
        cookiesPerSecond={cookiesPerSecond}
        setCookieCount={setCookieCount}
        cookieCount={cookieCount}
        setCookiesPerSecond={setCookiesPerSecond}
        totalCookieCount={totalCookieCount}
      />
    </div>
  );
}
