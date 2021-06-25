
// Iteration #1

const mongoose = require("mongoose");

//Llamada al modelo drone
const Drone = require("../models/Drone.model.js");

require("../db");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];


//Creacion de la coleccion drones
mongoose.connection.once("connected", () => {
  mongoose.connection.db.dropDatabase()
  .then(() => {
      console.log("Database cleared");
      return Drone.insertMany(drones)
  })
  .then((dronesCreated) => {
      console.log(`${dronesCreated.length} drones have been created`)
  })
  .catch((e) => {
      console.log(e)
  })
  .finally(() => {
      mongoose.connection.close()
  })
  .then(() => {
      console.log("finnished seeds.js")
  })
  .catch((e) => {
      console.log(e)
  })
  .finally(() => {
      process.exit(0)
  })
}) 
