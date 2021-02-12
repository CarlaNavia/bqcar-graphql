import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RideSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: "Users" },
    driverId: { type: Schema.Types.ObjectId, ref: "Users" },
    carId: { type: Schema.Types.ObjectId, ref: "Cars" },
    rideDate: { type: Date, required: true, default: Date.now() },
    isFinalized: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Ride = mongoose.model("Rides", RideSchema);
export default Ride;
