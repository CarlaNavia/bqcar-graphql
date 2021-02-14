import { AuthenticationError } from "apollo-server-express";

const car = async (parent, args, { Car, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  if (!currentUser.isDriver)
    throw new AuthenticationError("You need to be a driver to check your car!");
  const car = await Car.findOne({
    driverId: currentUser._id,
    isBlocked: false,
    isAvailable: true,
  });
  return car;
};

const randomCar = async (parent, args, { Car, currentUser }) => {
  if (!currentUser) throw new AuthenticationError("You need to be logged in!");
  const random = await Car.aggregate([
    { $match: { isAvailable: true } },
    { $sample: { size: 1 } },
    {
      $lookup: {
        from: "users",
        localField: "driverId",
        foreignField: "_id",
        as: "driver",
      },
    },
  ]);
  const mappedRandomCar = random.map((car) => {
    const { driver } = car;
    return { ...car, driverId: driver[0] };
  });
  return mappedRandomCar[0];
};

export default {
  randomCar,
  car,
};
