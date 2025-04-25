export default function TotalCookies({ count, cookieCount }) {
  const totalCookieCount = count + cookieCount;
  return (
    <div>
      <p>Total cookies: {totalCookieCount}</p>
    </div>
  );
}
