import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import "./Login.css";

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
      <div className="login-page">
        <h1 className="login-title">¡Bienvenidx a BQcar! <br/><br/>Para poder utilizar la aplicación deberás iniciar sesión:</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            className="input-form"
            placeholder="E-mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <input
            type="password"
            name="password"
            className="input-form"
            placeholder="Contraseña"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <input type="submit" className="login-form-button" value="Acceder" />
        </form>
      </div>

      <ul className="expl-title">
        <li>
          <Link to="/register" className="expl-title">¿No tienes cuenta? ¡Regístrate!</Link>
        </li>
      </ul>
    </>
  );
};

export default withAuth(Login);
