import React from "react";
import { useState } from "react";

export default function CookieButton() {
  const [cookieState, setCookieState] = useState(0);
  function increase() {
    setCookieState(cookieState + 1);
  }

  return (
    <div>
      <p>You have this many cookies:{cookieState}, neat!</p>
      <button onClick={increase}>Click for another cookie!</button>
    </div>
  );
}
