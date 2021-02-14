import { UserInputError, AuthenticationError } from "apollo-server-express";
const addCar = async (parent, args, { Car, currentUser }, info) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver)
    throw new AuthenticationError("You cannot add any car!");
  try {
     await Car.findOneAndUpdate(
      { driverId: currentUser._id },
      { isBlocked: true , isAvailable:false},
      { new: true }
    );
    const newCar = new Car({
      model: args.model,
      carRegistration: args.carRegistration,
      colour: args.colour,
      driverId: currentUser._id,
      isAvailable: true,
    });
    return newCar.save();
  } catch (error) {
    console.log(error);
  }
};

const carStatus = async (parent, args, { Car, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver)
    throw new AuthenticationError("You are not allowed to change the status");
  const updatedCar = Car.findOneAndUpdate(
    { _id: args._id, driverId: currentUser._id },
    { isAvailable: args.isAvailable },
    { new: true }
  );
  const resultCar = updatedCar.populate("driverId");
  return resultCar;
};

export default {
  addCar,
  carStatus,
};
