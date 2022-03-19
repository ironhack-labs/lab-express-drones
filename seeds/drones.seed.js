// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
]

const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")
require("../db/index.js")

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(
      "This is the total number of drones in the database: ",
      dronesFromDB.length
    )
    mongoose.connection.close()
  })
  .catch((err) => console.log(`Error while seeding the database: ${err}`))
