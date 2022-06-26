import { Link } from "react-router-dom";

export const Page2 = () => {
  const userId = 999;
  const userName = "ogawa";
  return (
    <div>
      <h1>Page2です</h1>
      <Link to={`/page2/${userId}`}>URL Parameter</Link>
      <br />
      <Link to={`/page2/${userId}?name=${userName}`}>Query Parameter</Link>
    </div>
  );
};
