import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h1>Page1DetailAです</h1>
      <h2>受け渡されたデータは {state} です</h2>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
