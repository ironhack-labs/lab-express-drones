// Iteration #1
require("./../configs/db.config");
const mongoose = require("mongoose");

const DroneModel = require("./../models/Drone.model");

let drones = [
    {
        name: "Anna",
        propellers: 4,
        maxSpeed: 25
    },
    {
        name: "Matthieu",
        propellers: 2,
        maxSpeed: 23
    },
    {
        name: "Juan",
        propellers: 3,
        maxSpeed: 26
    }
]
DroneModel.create(drones)
.then((dronesDocument) => {
console.log(dronesDocument.length);
mongoose.connection.close("mongodb://localhost/express-drones-dev");
console.log("mongodb connection closed");
})
.catch((err) => {
    console.log(err)
})
