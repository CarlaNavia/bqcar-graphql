import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

const Login = ({ isLoggedin = false, login = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (isLoggedin) history.push("/");
  }, [isLoggedin, history]);

  return (
    <>
      <div>
        <h1>BQcar</h1>
        <div>Iniciar Sesión</div>
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="INICIAR SESIÓN" />
        </form>
      </div>
      <ul>
        <li>
          <Link to="/register">¿No tienes cuenta? </Link>
        </li>
      </ul>
    </>
  );
};

export default withAuth(Login);
