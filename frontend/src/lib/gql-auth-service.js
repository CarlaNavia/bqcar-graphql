import {  gql } from "@apollo/client";

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

export { LOGIN, REGISTER };
