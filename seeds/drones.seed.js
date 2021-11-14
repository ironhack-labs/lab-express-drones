
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
    {
        name: "Drone Faki",
        propellers: 4,
        maxSpeed: 300
    },
    {
        name: "Drone Plex",
        propellers: 3,
        maxSpeed: 400
    },
    {
        name: "Drone Beyer",
        propellers: 5,
        maxSpeed: 600
    }
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Drone.create(drones)
    .then( () => {
        console.log(`${drones.length} drones have been created`)
        mongoose.connection.close()
    })
    .catch( (err) => console.log(`This error occured while trying to create drones: ${err}`))

  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  });
