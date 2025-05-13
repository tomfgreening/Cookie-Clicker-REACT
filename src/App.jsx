import React from "react";
import { useState } from "react";
import CookieButton from "./Components/CookieButton";
import { useTimer } from "./useTimer";
import TotalCookies from "./Components/TotalCookies";
import UpgradesTable from "./Components/UpgradesTable";

export default function App() {
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  const [cookieCount, setCookieCount] = useState(0);
  const count = useTimer({ setCookieCount, cookiesPerSecond });
  function increase() {
    setCookieCount(cookieCount + 1);
  }
  function decrease(cookieCost) {
    setCookieCount(cookieCount - cookieCost);
  }
  return (
    <div>
      <TotalCookies count={count} cookieCount={cookieCount} />
      <CookieButton increase={increase} />
      <UpgradesTable decrease={decrease} />
    </div>
  );
}
