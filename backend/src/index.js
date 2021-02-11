import express from "express";
import { PORT } from "./config";
//Init express app
const app = express();

// Initialize MongoDB
import "./db/initialize";

// The `listen` method launches a web server.
app.listen(PORT, () => {
  console.log(`🚀 Server ready at port: ${PORT} `);
});
