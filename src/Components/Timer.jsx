import React from "react";
import { useTimer } from "../useTimer";

export function Timer(){
    const count = useTimer();
    return <div>Count: {count} </div>;
}