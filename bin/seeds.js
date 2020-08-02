require('../configs/db.config')
const mongoose = require('mongoose')

const Dronemodel = require('../models/Drone.model')

let initialDrones = [
    {name: 'Drone 1', propellers: 4, maxSpeed: 30},
    {name: 'Drone 2', propellers: 3, maxSpeed: 80},
    {name: 'Drone 3', propellers: 12, maxSpeed: 50}
]


Dronemodel.create(initialDrones)
    .then(() => {
        console.log(initialDrones.length)
        mongoose.connection.close()
            .then(() => {
                console.log('Connection is closed')
            })
    })
    .catch((err) => {
        console.log('wow, that did not go well', err)
    })

