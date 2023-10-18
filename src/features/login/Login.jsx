import "./Login.css";

// eslint-disable-next-line
export const Login = ({ handleSubmit }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    handleSubmit({ username, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Usuario</label>
      <input type="text" id="username" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
};
