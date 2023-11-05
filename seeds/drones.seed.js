const mongoose = require("mongoose")

const Drone = require("./../models/Drone.model")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const connectionString = "mongodb://127.0.0.1:27017/lab-express-drones"

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("You're connected to the database")
        return Drone.create(drones)
    })
    .then(() => {
        console.log(`Created drones`)
        return mongoose.connection.close()
    })

    .then(() => {
        console.log("DB connection closed")
    })
    .catch(err => {
        console.log(`An error occurred while creating drones ${err}`)
    })