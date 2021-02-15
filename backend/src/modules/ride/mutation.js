import { AuthenticationError } from "apollo-server-express";

const confirmRide = async (parent, args, { Car, Ride, currentUser }, info) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (currentUser.isDriver)
    throw new AuthenticationError("You cannot book a service!");
  const car = await Car.findByIdAndUpdate(
    { _id: args.carId },
    { isAvailable: false },
    { new: true }
  );

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
    { driverId: currentUser._id, isFinalized: false },
    { isFinalized: true },
    { new: true }
  );
};

export default {
  confirmRide,
  finalizeRide,
};
