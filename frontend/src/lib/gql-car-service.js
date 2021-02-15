import { gql } from "@apollo/client";

const MYCAR = gql`
  query car {
    car {
      _id
      model
      carRegistration
      colour
      isAvailable
    }
  }
`;

const RANDOMCAR = gql`
  query randomCar {
    randomCar {
      _id
      model
      colour
      carRegistration
      isAvailable
      driverId {
        _id
        firstName
        lastName
      }
    }
  }
`;

const ADDCAR = gql`
  mutation addCar(
    $model: String!
    $carRegistration: String!
    $colour: String!
  ) {
    addCar(model: $model, carRegistration: $carRegistration, colour: $colour) {
      _id
      model
      carRegistration
      colour
    }
  }
`;

const STATUS = gql`
  mutation carStatus {
    carStatus {
      _id
      model
      carRegistration
      colour
      isAvailable
    }
  }
`;

export { MYCAR, ADDCAR, RANDOMCAR, STATUS};
