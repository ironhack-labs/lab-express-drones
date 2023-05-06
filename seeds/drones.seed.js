// Iteration #1
const mongoose = require('mongoose')
const Drone = require("./../models/Drone.model")

const MongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/lab-express-drones"

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(MongoUri)
    .then(x => {
        console.log(`Conected to Mongo database "${x.connections[0].name}"`)
        return Drone.create(drones)
    })
    .then(dronesDB => {
        console.log(`Create ${dronesDB.length} drones`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log("Conection Closed!! A tu casa ")
    })
    .catch(err => {
        console.log(`An error ocurred while creating Drones from DB : ${err}`)
    })