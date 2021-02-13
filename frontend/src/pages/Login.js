import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      _id
      firstName
      lastName
      email
      password
      isDriver
      token
    }
  }
`;

const Login = () => {
  const [loginUser, { data }] = useMutation(LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(data, "data");
  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({
      variables: { email, password },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="INICIAR SESIÓN" />
      </form>

      <ul>
        <li>
          <Link to="/register">¿No tienes cuenta? </Link>
        </li>
      </ul>
    </>
  );
};

export default Login;
