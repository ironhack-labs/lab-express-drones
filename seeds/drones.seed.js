// Iteration #1

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
const Drone = require("../models/Drone.model");

mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
        mongoose.connection.db.dropDatabase()
        return Drone.deleteMany()
    })
    .then(() => {
        return Drone.insertMany(Drones)
    })
    .then(result => {
        console.log(result)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err)
    })
    .finally(() => mongoose.connection.close())

const Drones = [
    {
        name: "First-drone",
        propellers: 3,
        maxSpeed: 120
    },
    {
        name: "Second-drone",
        propellers: 4,
        maxSpeed: 140
    },
    {
        name: "Third-drone",
        propellers: 6,
        maxSpeed: 160
    }
]