// Iteration #1
const drones=[
    {name:"Alfonso",
    propellers:4,
    maxSpeed:15
    },
    {name:"Ari",
    propellers:3,
    maxSpeed:17
    },
    {name:"Melissa",
    propellers:2,
    maxSpeed:10
    },
]

// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const Drone =require("../models/Drone.model")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    Drone.create(drones)
    .then(dron=>{
        console.log("nuevo", dron)
    })
    .catch(err=>{
        console.error("Error en create drone: ", err)
    })

  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
