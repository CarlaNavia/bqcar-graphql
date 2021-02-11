import CarQueries from "../modules/car/query";
import RideQueries from "../modules/ride/query";
import CarMutations from "../modules/car/mutation";
import RideMutations from "../modules/ride/mutation";

const resolvers = {
  Query: {
    ...CarQueries,
    ...RideQueries,
  },

  Mutation: {
    ...CarMutations,
    ...RideMutations
  },
};

export default resolvers;
