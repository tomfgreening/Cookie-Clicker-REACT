import { useTimer } from "../useTimer";

export default function Timer(){
    const count = useTimer();
    return <div> {count} </div>;
}