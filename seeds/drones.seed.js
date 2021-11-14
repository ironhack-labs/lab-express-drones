const mongoose = require("mongoose");
const DroneModel = require("../models/Drone.model");

const MONGO_URI = "mongodb+srv://amyloudav:Littledevil1@cluster0.khlek.mongodb.net/test"

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];
  
  DroneModel.create(drones)
  .then((x) => {
    console.log(`Connected to Mongo!${x}`)
  })
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  newDrone();




