require("../configs/db.config");
const mongoose = require("mongoose");
const DroneModel = require("../models/DroneModel");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

DroneModel.create(drones)
  .then((dronesDocument) => {
    console.log(dronesDocument);
  })
  .catch((error) => {
    console.log(error);
  });

  mongoose.disconnect(drones)
  .then(()=>{
      console.log("mongoDB is disconnected")
  })
  .catch(()=>{
      console.log("ERROR , I'm trap")
  })
