const Dron = require('./../models/Drone.model')
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/lab-express-drones'

mongoose
    .connect(MONGODB_URI)
    .then((X)=> console.log(`conected to Mongo! Database name: ${x.connection[0].name}`))
    .catch((err)=> console.log("Error connecting to mongo", err))


const drones = [
    {
        name:"Dron Pepito",
        propellers:1,
        maxSpeed:2
    }, 
    {
        name:"Dron José",
        propellers:3,
        maxSpeed:4
    }, 
    {
        name:"Dron Mallu",
        propellers:5,
        maxSpeed:6
    }, 
]


Dron
    .create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        mongoose.connection.close()
   })
    .catch(err => console.log(`An error occurred while creating drones from the DB: ${err}`))


    