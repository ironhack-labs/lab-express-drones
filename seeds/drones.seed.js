const mongoose = require ('mongoose')
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/ironDrones";

mongoose
.connect(MONGO_URI)
.then((x)=> {
    console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
    )
})
.catch((err) => {
    console.error("Error connecting to mongo: ", err)
})

const drones = [
    {
        name: 'nastyGirl Fantastik',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'natural noPlastik',
        propellers: 4,
        maxSpeed: 29
    },
    {
        name: 'bomBastik 2000',
        propellers: 8,
        maxSpeed: 36
    }
]

Drone
.create(drones)
.then(dronesFromDB =>{
    console.log(`There are ${dronesFromDB.length} drones in the database`)
    mongoose.connection.close()
})
.catch(err => console.log(`There has been an error during the creation of the drones: ${err}`))