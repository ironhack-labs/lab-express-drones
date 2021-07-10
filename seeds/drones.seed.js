// Iteration #1

  // ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


const drones = [
    { name: "Madafacka Killa", propellers: 3, maxSpeed: 12 },
    { name: "Speedy Gonzales", propellers: 4, maxSpeed: 20 },
    { name: "Super Mistos", propellers: 6, maxSpeed: 18 }
  ];

DroneModel.create(drones)
.then(dronesCreated=> {
    console.log("Drones were created!!", dronesCreated)})
.then(()=>{
    mongoose.disconnect()
})
.catch(err=> console.log("Ups, something went wrong!", err))




