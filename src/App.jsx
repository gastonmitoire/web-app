import "./App.css";

import { LoginWrapper } from "./features/login/LoginWrapper";
import { ShopWrapper } from "./features/shop/ShopWrapper";

function App() {
  const accessToken = localStorage.getItem("accessToken");

  const LogoutButton = () => {
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      window.location.reload();
    };
    return (
      <button type="button" className="logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    );
  };

  const renderApp = () => {
    if (!accessToken) {
      return <LoginWrapper />;
    }
    return (
      <>
        <ShopWrapper />
      </>
    );
  };

  return (
    <div>
      {accessToken && (
        <header>
          <LogoutButton />
        </header>
      )}
      {renderApp()}
    </div>
  );
}

export default App;
