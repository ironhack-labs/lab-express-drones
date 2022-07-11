// Iteration #1
const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")

const dronesArr = [
{
    name: "drone1",
    propellers: 5,
    maxPrice: 100
},
{
    name: "drone2",
    propellers: 2,
    maxPrice: 160 
},
{
    name: "drone3",
    propellers: 9,
    maxPrice: 600   
}
]

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Drone.create(dronesArr)
  })
  .then ( () => {
    console.log(`${dronesArr.length} drones created`)
    mongoose.connection.close()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  });

