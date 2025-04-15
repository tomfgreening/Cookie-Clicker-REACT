import {useState} from 'react';

export default function CookieButton() {
    const [cookieState, setCookieState] = useState(0);
    function increase() {
        setCookieState(cookieState +1);
    }
}