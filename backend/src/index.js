import express from "express";
import initializeGraphQL from "./graphql/initialize";
import { PORT } from "./config";

//Init express app
const app = express();

// Initialize GraphQL
initializeGraphQL(app);

// Initialize MongoDB
import "./db/initialize";

// The `listen` method launches a web server.
app.listen(PORT, () => {
  console.log(`🚀 Server ready at port: ${PORT} `);
});
