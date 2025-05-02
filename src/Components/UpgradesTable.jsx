export default function UpgradesTable({cookieCost, decrease}){
    return(
        <div>
            <button onClick={decrease(cookieCost)}>Upgrade 1</button>
        </div>
    )
}