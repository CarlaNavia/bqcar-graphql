const currentRide = async (parent, args, { Ride, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver) {
    const ride = await Ride.find({
      clientId: currentUser._id,
      isFinalized: false,
    }).populate("driverId")
    return ride;
  } else {
    const ride = await Ride.find({
      driverId: currentUser._id,
      isFinalized: false,
    }).populate("clientId");
    return ride;
  }
};

const allRides = async (parent, args, { Ride, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver) {
    const ride = await Ride.find({
      clientId: currentUser._id,
    });
    return ride;
  } else {
    const ride = await Ride.find({
      driverId: currentUser._id,
    });
    return ride;
  }
};


export default {
  allRides,
  currentRide,
};
