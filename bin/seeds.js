// Iteration #1
require("dotenv").config()
require("../configs/db.config")
const Drone = require("../models/Drone.model")
const data = require("../data.json")


Drone.deleteMany()
    .then(() => {
        Drone.insertMany(data)
            .then((drone) => {
            console.log (drone)
        })
    })
    .catch((e) => console.log("Error", e))
     
