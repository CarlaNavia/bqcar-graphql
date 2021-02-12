import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";

const decodeToken = async (authToken) => {
  if (!authToken) throw new AuthenticationError("you must be logged in!");

  const token = authToken.split("Bearer ")[1];
  if (!token) throw new AuthenticationError("you should provide a token!");

  const user = await jwt.verify(token, SECRET_TOKEN, (err, decoded) => {
    if (err) throw new AuthenticationError("invalid token!");
    return decoded;
  });
  return user;
};

export default {
  decodeToken,
};
