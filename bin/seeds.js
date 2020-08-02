// Iteration #1
require("../configs/db.config")
const mongoose = require("mongoose")

const DroneModel = require("../models/Drone.model")

DroneModel.insertMany([
    {name:"MaxQ Racer", propellers: 4, maxSpeed: 20},
    {name:"MaxQ Totem", propellers: 6, maxSpeed: 14},
    {name:"MaxQ Filmer", propellers: 8, maxSpeed: 18}
])
     .then(() => {
        console.log("Drones created:", DroneModel.length)
          .then(() => {
            mongoose.connection.close()
              .then(() => {
                 console.log("Connection is closed")
             })  
        }) 
     })
     .catch(() => {
        console.log("Error! No drone was created!")
     }) 
    
