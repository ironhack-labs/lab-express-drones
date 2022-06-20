// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const Mongo_URI = process.env.Mongo_URI || 'mongodb://localhost/lab-express-drones';

mongoose.connect(Mongo_URI);

const droneArr = [{
    name:'dronio',
    propellers:4,
    maxSpeed:12
    },
    {
        name:'dronito',
        propellers: 6,
        maxSpeed: 4
    },
    {
        name: 'dronia',
        propellers: 5,
        maxSpeed: 10
    }]

Drone.create(droneArr)
    .then(droneFromDB =>{
        console.log(`Creacion ${droneFromDB} drones`)
        mongoose.connection.close()
    })
    .catch(error=>console.log('Un error ocurio: ',error))
