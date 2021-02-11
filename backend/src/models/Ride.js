import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RideSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: "User" },
    driveId: { type: Schema.Types.ObjectId, ref: "User" },
    carId: { type: Schema.Types.ObjectId, ref: "Car" },
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
