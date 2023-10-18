import "./App.css";

import { LoginWrapper } from "./features/login/LoginWrapper";
import { ShopWrapper } from "./features/shop/ShopWrapper";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return <LoginWrapper />;
  }
  return (
    <>
      <ShopWrapper />
    </>
  );
}

export default App;
