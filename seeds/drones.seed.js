const Drones = require("../models/Drone.model.js")
const mongoose = require("mongoose");

const drones = [
  {
    name: "drone1",
    propellers: 4,
    maxSpeed: 20,
  },
  {
    name: "drone2",
    propellers: 4,
    maxSpeed: 30,
  },
  {
    name: "drone3",
    propellers: 4,
    maxSpeed: 40,
  },
];


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
Drones.create(drones,function(error, data){
    mongoose.connection.close()
    if (error) return console.log(error)
    console.log(data.length)  
})

    
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
