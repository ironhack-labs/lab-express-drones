require("./../configs/db.config")

const droneModel = require("./../models/droneModel")
const MongoosE = require("mongoose")

const drones = [
    {
        name: 'Creeper XL 500',
        propellers: 3,
        maxSpeed: 12
    },
    {
        name: 'Racer 57',
        propellers: 4,
        maxSpeed: 20
    },
    {
        name: 'Courier 3000i',
        propellers: 6,
        maxSpeed: 18
    }
]

droneModel.create(drones)
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})
.then( dbclose => {
    MongoosE.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination')})
   
})
