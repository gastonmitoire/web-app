import { Login } from "./Login";
import { fetchClient } from "../../utils/fetchClient";

export const LoginWrapper = () => {
  const login = async ({ username, password }) => {
    const response = await fetchClient("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });
    const data = await response;
    const { token } = data;

    if (token) {
      localStorage.setItem("accessToken", token);
      window.location.href = "/";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <Login handleSubmit={handleSubmit} />
    </>
  );
};
