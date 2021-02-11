import Ride from "../../models/Ride";

const confirmRide = async (parent, args, context, info) => {
  console.log(args.carId, "args.carId")
  const confirmation = new Ride({

    carId: args.cardId,
  });
  await confirmation.save();
  return confirmation;
};

const finalizeRide = async (parent, args) => {
  return Ride.findOneAndUpdate(
    { _id: args._id },
    { isFinalized: args.isFinalized },
    { new: true }
  );
};

export default {
  confirmRide,
  finalizeRide,
};
