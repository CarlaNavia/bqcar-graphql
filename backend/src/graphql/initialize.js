import { ApolloServer } from "apollo-server-express";

// DB Models
import Car from "../models/Car";
import Ride from "../models/Ride";

// Setup GraphQL
import typeDefs from "./schemas";
import resolvers from "./resolvers";

export default (app) => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Car , Ride},
  });

  apolloServer.applyMiddleware({ app });
};
