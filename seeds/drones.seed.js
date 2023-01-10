// Iteration #1
const objects = [
    {
        name:"Dji Mini 3",
        propellers:4,
        maxSpeed:25,
    },
    {
        name:"Dji Avata Pro",
        propellers:4,
        maxSpeed:30,
    },
    {
        name:"Dji Mavic 3",
        propellers:4,
        maxSpeed:10,
    },
]

const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Drone.create(objects)
  })
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
