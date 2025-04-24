import React from "react";
import { useState } from "react";

import CookieButton from "./Components/CookieButton";
import Timer from "./Components/Timer";


export default function App() {
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
            <Timer/>
        </div>
    );
}