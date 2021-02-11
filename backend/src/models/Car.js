import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  model: { type: String, required: true },
  carRegistration: { type: String, required: true },
  colour: { type: String, required: true },
  driveId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isAvailable: { type: Boolean, default: false },
});

const Car = mongoose.model("Cars", CarSchema);
export default Car;
