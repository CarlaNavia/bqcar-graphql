const currentRide = async (parent, args, { Ride, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver) {
    const ride = await Ride.findOne({
      clientId: currentUser._id,
      isFinalized: false,
    }).populate("driverId").populate("carId");
    return ride;
  } else {
    const ride = await Ride.findOne({
      driverId: currentUser._id,
      isFinalized: false,
    }).populate("clientId").populate("carId");
    return ride;
  }
};

const allRides = async (parent, args, { Ride, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver) {
    const ride = await Ride.find({
      clientId: currentUser._id,
    })
      .populate("driverId")
      .populate("clientId")
      .populate("carId");
    return ride;
  } else {
    const ride = await Ride.find({
      driverId: currentUser._id,
    })
      .populate("driverId")
      .populate("clientId")
      .populate("carId");
    return ride;
  }
};

export default {
  allRides,
  currentRide,
};
