import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  UserInputError,
  AuthenticationError,
  ValidationError,
} from "apollo-server-express";
import { SECRET_TOKEN } from "../../config";
import { validateLogin, validateRegister } from "./validations";

const getToken = ({ _id, isDriver }) =>
  jwt.sign(
    {
      _id,
      isDriver,
    },
    SECRET_TOKEN,
    { expiresIn: "3h" }
  );

const loginUser = async (parent, { email, password }, { User }) => {
  const { errors, valid } = validateLogin(email, password);
  if (!valid) throw new UserInputError("Error", { errors });

  const user = await User.findOne({ email });
  if (!user)
    throw new AuthenticationError("this email is not in our database!");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new AuthenticationError("wrong password!");

  const token = getToken(user);
  return {
    id: user._id,
    ...user._doc,
    token,
  };
};

const registerUser = async (
  parent,
  { user: { firstName, lastName, email, password, isDriver } },
  { User }
) => {
  const { errors, valid } = validateRegister(
    firstName,
    lastName,
    email,
    password
  );
  if (!valid) throw new UserInputError("Error", { errors });

  const user = await User.findOne({ email });
  if (user) throw new ValidationError("This email is already in our database");
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isDriver,
  });

  const res = await newUser.save();
  const token = getToken(res);

  return {
    id: res._id,
    ...res._doc,
    token,
  };
};

export default {
  loginUser,
  registerUser,
};
