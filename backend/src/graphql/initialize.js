import { ApolloServer } from "apollo-server-express";
import token from "../utils/token";

import Car from "../models/Car";
import Ride from "../models/Ride";
import User from "../models/User";

// Setup GraphQL
import typeDefs from "./schemas";
import resolvers from "./resolvers";
const corsOptions = { origin: "http://localhost:4000", credentials: true };



export default (app) => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    cors:corsOptions,
    context: async ({ req }) => {
      let authToken = null;
      let currentUser = null;
      try {
        authToken = req.headers.authorization;
        if (authToken) {
          currentUser = await token.decodeToken(authToken);
        }
      } catch (error) {
        console.log(error);
      }
      return {
        authToken,
        currentUser,
        Car,
        Ride,
        User,
      };
    },
  });

  apolloServer.applyMiddleware({ app });
};
