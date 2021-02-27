// Iteration #1
const mongoose = require('mongoose')
require("../configs/db.config.js");
// const { mongo, Mongoose } = require("mongoose");
const Drones = require('../models/Drone.model.js');

const drones = [
{
name: "one",
propellors: 1,
maxSpeed: 100
},

{
name: "two",
propellors: 2,
maxSpeed: 200
},

{
name: "three",
propellors: 3,
maxSpeed: 300
},
]


// create the DB

function insertDrone(data) {

Drones.insertMany(data).then((drones) => drones.forEach((drone) => console.log(drone.name)))
    .then(() => {mongoose.connection.close()})

.catch((err) => console.log(err))

}

function deleteAll() {
Drones.deleteMany().then(()=> console.log("succesfully deleted"))
    .then(() => {mongoose.connection.close()})
    .catch((err) => console.log(err))
}

function deleteOne(name, val) {
Drones.deleteOne({name: val}).then(()=> console.log("succesfully deleted one")) 
    .then(() => {mongoose.connection.close()})
    .catch((err) => console.log(err))
}

// insertDrone(drones)
// deleteAll()


