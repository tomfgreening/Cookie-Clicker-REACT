import React from "react";
import { useState } from "react";

import CookieButton from "./Components/CookieButton";
import { useTimer } from "./useTimer";
import Timer from "./Components/Timer";
import TotalCookies from "./Components/TotalCookies";
import UpgradesTable from "./Components/UpgradesTable";

export default function App() {
  const count = useTimer();
  const [cookieCount, setCookieState] = useState(0);
  function increase() {
    setCookieState(cookieCount + 1);
  }
  function decrease(cookieCost) {
    setCookieState(cookieCount - cookieCost);
  }
  return (
    <div>
      <TotalCookies count={count} cookieCount={cookieCount} />
      <CookieButton increase={increase} />
      <Timer />
      <UpgradesTable decrease={decrease} />
    </div>
  );
}
