import { AuthenticationError } from "apollo-server-express";

const confirmRide = async (parent, args, { Car, Ride, currentUser }, info) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (currentUser.isDriver)
    throw new AuthenticationError("You cannot book a service!");
  const car = await Car.findById(args.carId);
  const confirmation = new Ride({
    clientId: currentUser._id,
    driverId: car.driverId,
    carId: args.carId,
  });
  return confirmation.save();
};

const finalizeRide = async (parent, args, { Ride, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver)
    throw new AuthenticationError("You cannot finalize the ride!");
  return Ride.findOneAndUpdate(
    { _id: args._id, driverId: currentUser._id },
    { isFinalized: args.isFinalized },
    { new: true }
  );
};

export default {
  confirmRide,
  finalizeRide,
};
