// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");

const DB_NAME = 'drones'

mongoose.connect(`mongodb://localhost/${DB_NAME}`,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true 
});
const drones = [
{
    name: "Amateur Drone",
    propellers: 3,
    maxSpeed: 30
},
{
    name: "Special Drone",
    propellers: 4,
    maxSpeed: 40
},
{
    name: "Drone for Pros",
    propellers: 5,
    maxSpeed: 50
    }
];

Drone.create(drones)
    .then(dronesFromDB=>{
        console.log(`Created ${dronesFromDB.length} drones`)
        mongoose.connection.close()
    })
    .catch(err=> console.log(`An error occurred: ${err}`))