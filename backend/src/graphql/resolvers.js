import CarQueries from "../modules/car/query";
import RideQueries from "../modules/ride/query";
import CarMutations from "../modules/car/mutation";
import RideMutations from "../modules/ride/mutation";
import UserQueries from "../modules/user/query";
import UserMutations from "../modules/user/mutation";

const resolvers = {
  Query: {
    ...CarQueries,
    ...RideQueries,
    ...UserQueries,
  },

  Mutation: {
    ...CarMutations,
    ...RideMutations,
    ...UserMutations,
  },
};

export default resolvers;
