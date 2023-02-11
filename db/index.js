const mongoose = require("mongoose");
require('dotenv/config');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";


mongoose
  .set('strictQuery', true)
  .connect(MONGO_URI)
  .then((x) => {
    console.log("SOY YO CRIS (●'◡'●)", MONGO_URI)
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
