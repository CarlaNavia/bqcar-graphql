import { gql } from "apollo-server-express";

export default gql`
  type Car {
    _id: String
    model: String
    carRegistration: String
    colour: String
    driverId: User
    isAvailable: Boolean
  }

  extend type Query {
    allCars: [Car!]!
    car(_id: ID!): Car!
    randomCar: Car!
  }

  extend type Mutation {
    addCar(model: String!, carRegistration: String!, colour: String!): Car!
    carStatus(_id: ID, isAvailable: Boolean!): Car!
  }
`;
