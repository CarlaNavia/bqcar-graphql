import Car from "../../models/Car";

const addCar = async (parent, args, context, info) => {
  try {
    const car = new Car({
      model: args.model,
      carRegistration: args.carRegistration,
      colour: args.colour,
    });
    await car.save();
    return car;
  } catch (error) {
    console.log(error);
  }
};

const carStatus = async (parent, args) => {
  return Car.findOneAndUpdate(
    { _id: args._id },
    { isAvailable: args.isAvailable },
    { new: true }
  );
};

export default {
  addCar,
  carStatus,
};
