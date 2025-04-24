import React from "react";
import { useState } from "react";

import CookieButton from "./Components/CookieButton";
import { useTimer } from "./useTimer";
import Timer from "./Components/Timer";


export default function App() {
    const count = useTimer();
    const [cookieCount, setCookieState] = useState(0);
    function increase() {
        setCookieState(cookieCount +1);
    }
    return (
        <div>
            <CookieButton
            cookieCount={cookieCount}
            increase={increase}
            />
            <Timer
            count={count}/>
        </div>
    );
}