import {useState} from 'react';

export default function CookieButton() {
    const [cookieState, setCookieState] = useState(0);
    function increase() {
        setCookieState(cookieState +1);
    }

    return (
        <div>
        <p>You have'{cookieState}' many cookies, neat!</p>
        </div>
    )
}