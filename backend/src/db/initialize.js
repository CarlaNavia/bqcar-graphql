import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/bq-car", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("🎯 Mongodb connected"))
  .catch((error) => console.log(error));
