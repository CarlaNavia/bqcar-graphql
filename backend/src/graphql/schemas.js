import { gql } from "apollo-server-express";
import CarTypes from "../modules/car/type";
import RideTypes from "../modules/ride/type";
import UserTypes from "../modules/user/type";

export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }

  ${CarTypes}
  ${RideTypes}
  ${UserTypes}
`;
