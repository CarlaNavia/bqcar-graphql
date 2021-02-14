import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import { useHistory } from "react-router-dom";

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
    if (isLoggedin) history.push("/home");
  }, [isLoggedin, history]);

  return (
    <>
     
      <form onSubmit={handleSubmit}>
        <input
          type="firstName"
          name="firstName"
          placeholder="Nombre"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="lastName"
          name="lastName"
          placeholder="Apellido"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="checkbox"
          name="isDriver"
          onChange={(event) => {
            setIsDriver(event.target.value);
          }}
        />
        Soy conductor
        <input type="submit" value="INICIAR SESIÓN" />
      </form>
      <ul>
        <li>
          <Link to="/">¿Ya tienes cuenta? </Link>
        </li>
      </ul>
    </>
  );
};

export default withAuth(Register);
