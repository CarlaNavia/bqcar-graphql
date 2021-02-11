import { gql } from "apollo-server-express";

export default gql`
  type Ride {
    _id: String
    clientId: String
    driveId: String
    carId: String
    rideDate: String
    isFinalized: Boolean
  }

  extend type Query {
    allRides: [Ride!]!
    currentRide: Ride!
  }

  extend type Mutation {
    confirmRide(carId: ID!): Ride!
    finalizeRide(_id: ID!, isFinalized: Boolean!): Ride!
  }
`;
