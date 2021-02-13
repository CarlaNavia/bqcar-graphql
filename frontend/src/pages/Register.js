import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
  mutation registerUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $isDriver: Boolean
  ) {
    registerUser(
      user: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        isDriver: $isDriver
      }
    ) {
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

const Register = () => {
  const [registerUser, { data }] = useMutation(REGISTER);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDriver, setIsDriver] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser({
      variables: { firstName, lastName, email, password, isDriver },
    });
  };

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

export default Register;
