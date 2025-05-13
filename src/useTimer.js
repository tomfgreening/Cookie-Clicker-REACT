import {useState, useEffect} from "react";

export function useTimer({setCookieCount, cookiesPerSecond}) {
    const [count,setCount] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount + 1);
            setCookieCount((prevCount)=> prevCount + cookiesPerSecond);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [cookiesPerSecond,setCookieCount]);
    return count;
    }
