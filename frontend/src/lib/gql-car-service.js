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

export { MYCAR, ADDCAR };
