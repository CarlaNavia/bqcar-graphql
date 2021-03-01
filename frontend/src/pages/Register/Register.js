import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = ({ isLoggedin = false, register = () => {} }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDriver, setIsDriver] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(firstName, lastName, email, password, isDriver);
  };

  useEffect(() => {
    if (isLoggedin) history.push("/");
  }, [isLoggedin, history]);

  return (
    <>
      <div className="register-page">
        <h1 className="register-title">
          ¡Bienvenidx a BQcar! <br />
          <br />
          Para poder utilizar la aplicación deberás registrarte:
        </h1>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="firstName"
            className="input-form"
            placeholder="Nombre"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <br />
          <input
            type="text"
            name="lastName"
            className="input-form"
            placeholder="Apellido"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <br />
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
          <div className="checkbox-item">
            <input
              type="checkbox"
              name="isDriver"
              onChange={(event) => {
                setIsDriver(event.target.checked);
              }}
            />
            <p className="checkbox-item-text ">
              Marque esta casilla si usted es conductor y quiere ofrecer un
              servicio
            </p>
          </div>
          <br />
          <input
            type="submit"
            className="register-form-button"
            value="Acceder"
          />
        </form>

        <Link to="/login" className="expl-title-register">
          ¿Ya tienes cuenta? ¡Inicia sesión!{" "}
        </Link>
      </div>
    </>
  );
};

export default withAuth(Register);
