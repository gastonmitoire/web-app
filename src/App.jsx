import "./App.css";

import { LoginWrapper } from "./features/login/LoginWrapper";
import { ShopWrapper } from "./features/shop/ShopWrapper";

function App() {
  const user = localStorage.getItem("user");

  if (!user) {
    return <LoginWrapper />;
  }
  return (
    <>
      <ShopWrapper />
    </>
  );
}

export default App;
