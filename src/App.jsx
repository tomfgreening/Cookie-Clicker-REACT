import React from "react";
import { useState } from "react";

import CookieButton from "./Components/CookieButton";
import Timer from "./Components/Timer";


export default function App() {
    const [currentcookieState, setCookieState] = useState(0);
    return (
        <div>
            <CookieButton/>
            <Timer/>
        </div>
    );
}