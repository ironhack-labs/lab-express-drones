// Iteration #1
require("../configs/db.config");
const mongoose = require("mongoose");

const faker = require("faker");
const Drone = require("../models/Drone.model");

const insertDrones = []

for (let i = 0; i < 3; i++) {
        insertDrones.push({
            name: faker.random.word() + ' ' + faker.random.number(),
            propellers: (Math.floor(8 * Math.random()) + 2),
            maxSpeed: (Math.floor(20 * Math.random()) + 5),
        })
    };

Drone.deleteMany()
.then(() => {
    Drone.insertMany(insertDrones)
    })
.then(() => {
    console.log('Done inserting drones:'); 
    console.log(insertDrones);
})
.then(() => {
    console.log("Closing DB connection...");
    })
.finally(() => {
    setTimeout(function(){ 
        mongoose.connection.close(); 
    }, 1000);
})