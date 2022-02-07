// Iteration #1
require('./../db');
const mongoose = require("mongoose");

const drones = [
    {
        name: "Bumble Bee",
        propellers: 4,
        maxSpeed: 10
    },
    {
        name: "Wasp",
        propellers: 3,
        maxSpeed: 20
    },
    {
        name: "Spy-pro",
        propellers: 8,
        maxSpeed: 60
    }
];


const { Mongoose } = require("mongoose");
const Drone = require("./../models/Drone.model");

async function seedData() {
 try {
    const seededData = await Drone.create(drones);
    console.log("result from Mongo: ", seededData);
    mongoose.connection.close();
 } catch(err) {
     console.log(err);
     next(err);
 }
}

seedData();