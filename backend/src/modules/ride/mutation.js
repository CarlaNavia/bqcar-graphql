const confirmRide = async (parent, args, { Ride, currentUser }, info) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (currentUser.isDriver)
    throw new AuthenticationError("You cannot book a service!");
  const confirmation = new Ride({
    carId: args.cardId,
  });
  await confirmation.save();
  return confirmation;
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
