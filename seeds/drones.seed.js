// Iteration #1
const Drone = require("../models/Drone.model")
const mongoose = require("mongoose")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-drones";
  mongoose
    .connect(MONGO_URI)
    .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      Drone.insertMany(drones)
      .then(data=>console.log("Se agregaron los drones"))
      .catch(error=>console.log("No se agregaron los drones",error))
    })
    
    .catch(error=>console.log(error))

    mongoose.disconnect()