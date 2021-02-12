// const car = async (parent, args, { Car, currentUser }) => {
//   if (!currentUser) throw new AuthenticationError("You need to be logged in!");
//   const car = await Car.findById({ _id: args._id }).p;
//   return car;
// };

// const allCars = async (parent, args, { Car, currentUser }) => {
//   if (!currentUser) throw new AuthenticationError("You need to be logged in!");
//   return Car.find();
// };

const randomCar = async (parent, args, { Car, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  const random = await Car.aggregate([
    { $match: { isAvailable: true } },
    { $sample: { size: 1 } },
  ]);
  return random[0];
};

export default {
  // allCars,
  // car,
  randomCar,
};
