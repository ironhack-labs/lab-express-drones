
const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const DroneModel = require("../models/Drone.model")

const drones = [
	{ name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
	{ name: "Racer 57", propellers: 4, maxSpeed: 20 },
	{ name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
	return DroneModel.deleteMany({});
  })
  .then((valueObj) => {
	console.log("Number of drones deleted: ", valueObj.deletedCount)
	return DroneModel.create(drones)
  })
  .then(dronesArrFromDB => {
	console.log("Number of drones created: ", dronesArrFromDB.length);
    // mongoose.connection.close();
	mongoose.disconnect()
  })
  .catch((err) => {
    console.error("Error seeding: ", err);
  });