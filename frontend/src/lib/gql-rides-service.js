import { gql } from "@apollo/client";

const MYRIDES = gql`
  query allRides {
    allRides {
      _id
      clientId {
        firstName
        lastName
      }
      driverId {
        firstName
        lastName
      }
      carId {
        model
        colour
        carRegistration
      }
      rideDate
    }
  }
`;

export { MYRIDES };
