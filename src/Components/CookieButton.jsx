export default function CookieButton({cookieCount, increase}) {
  return (
    <div>
      <p>You have this many cookies: {cookieCount} , neat!</p>
      <button onClick={increase}>Click for another cookie!</button>
    </div>
  );
}
