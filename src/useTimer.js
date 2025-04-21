import {useState, useEffect} from "react";

export function useTimer() {
    const [count,setCount] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return count;
    }
