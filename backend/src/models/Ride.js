import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RideSchema = new Schema(
  {
    clientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driveId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    rideDate: { type: Date, required: true, default: Date.now() },
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
