const currentRide = async (parent, args, { Ride }) => {
  const ride = await Ride.find({ isFinalized: false });
  return ride;
};

const allRides = async (parent, args, { Ride }) => {
  return Ride.find();
};

export default {
  allRides,
  currentRide,
};
