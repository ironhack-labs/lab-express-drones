
// Iteration #1

const mongoose = require("mongoose");

//Llamada al modelo drone
const Drone = require("../models/Drone.model.js");

require("../db/index");

const data = require("../drones.json")

//Creacion de la coleccion drones
mongoose.connection.once("connected", () => {
  mongoose.connection.db.dropDatabase()
  .then(() => {
      console.log("Database cleared");
      return Drone.insertMany(data)
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
