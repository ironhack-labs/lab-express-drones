// Iteration #1


// insert data to DB =  seeding, steps below:

//set connection with DB
require('../config/database.config')
const mongoose = require('mongoose')


//require todo model
const DroneModel = require('../models/Drone.model')


//inserting data to the DB
DroneModel.create([
    {
        name: "Pioneer",
        propellers: 3,
        maxSpeed: 25
    },
    {
        name: "Apollo",
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: "Chandra",
        propellers: 1,
        maxSpeed: 18
    }  
]);
console.log("created")

    .then(() => {
        mongoose.connection.close()
            .then(() => {
                console.log('Connection is closed')
            })
    })


    // type in terminal : node bin/seeds.js to run once otherwise it's adding things