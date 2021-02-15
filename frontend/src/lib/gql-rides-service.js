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

const CURRENTRIDE = gql`
  query currentRide {
    currentRide {
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
      isFinalized
    }
  }
`;

const CONFIRMRIDE = gql`
  mutation confirmRide($carId: ID!) {
    confirmRide(carId: $carId) {
      _id
    }
  }
`;

const FINALIZERIDE = gql`
  mutation finalizeRide {
    finalizeRide {
      _id
    }
  }
`;

export { MYRIDES, CURRENTRIDE, CONFIRMRIDE, FINALIZERIDE };
