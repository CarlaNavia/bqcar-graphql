import { gql } from "apollo-server-express";

export default gql`
  type Ride {
    _id: String
    clientId: User
    driverId: User
    carId: Car
    rideDate: String
    isFinalized: Boolean
  }

  extend type Query {
    allRides: [Ride!]!
    currentRide: Ride
  }

  extend type Mutation {
    confirmRide(carId: ID!): Ride!
    finalizeRide: Ride!
  }
`;
