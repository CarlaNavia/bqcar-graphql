import { gql } from "apollo-server-express";

export default gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    isDriver: Boolean
    token: String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    isDriver: Boolean
  }
  extend type Query {
    profile: User!
  }

  extend type Mutation {
    registerUser(user: UserInput!) : User!
    loginUser(email: String!, password: String!): User!
  }
`;
