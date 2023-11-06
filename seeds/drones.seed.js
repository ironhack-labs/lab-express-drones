const mongoose = require("mongoose")
const Drone = require("./../models/Drone.model")


const drones = [{
    name: "F35",
    propellers: 25,
    maxSpeed: 40

},
{
    name: "Beluga",
    propellers: 5,
    maxSpeed: 70
},
{
    name: "Eurodrone",
    propellers: 10,
    maxSpeed: 30
},
]


const connectionString = "mongodb://127.0.0.1:27017/lab-express-drones"


mongoose
    .connect(connectionString)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Drone.create(drones)
    })
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} drones`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log(`An error occurred while creating drones from the DB: ${err}`)
    })






