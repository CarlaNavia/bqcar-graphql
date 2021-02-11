const car = async (parent, args, { Car }) => {
  const car = await Car.findById({ _id: args._id });
  return car;
};

const allCars = async (parent, args, { Car }) => {
  return Car.find();
};

const randomCar = async (parent, args, { Car }) => {
  const random = await Car.aggregate([
    { $match: { isAvailable: true } },
    { $sample: { size: 1 } },
  ]);
  return random[0];
};

export default {
  allCars,
  car,
  randomCar
};
