import { AuthenticationError } from "apollo-server-express";

const profile = async (parents, args, { User, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  const user = await User.findById({
    _id: currentUser._id,

  });
  return user;
};
export default {
  profile,
};
