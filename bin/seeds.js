// Iteration #1
const mongoose = require('mongoose')  //to allow mongoose to run here
const DroneModel = require ('../models/Drone.model')
console.log(DroneModel)

//ensure database is connected
require('../configs/db.config')  //make sure path is correct!  needed '..' move out of folder

DroneModel.insertMany([
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
])                                                      //this is a promise
    .then(() => {
        console.log('Data was added')
        mongoose.connection.close()  //closes connection as task is done.  Three ways of closing connection(choose)
    })

    .catch((err) => {
        console.log('something went wrong',err)
    })