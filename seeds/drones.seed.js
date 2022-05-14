// Iteration #1

require("../db");
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

const drones=[
    {name:"Helidrone",
    propellers:6,
    maxSpeed:18
    },
    {name:"AmazonBasics",
    propellers:2,
    maxSpeed:12
    },
    {name:"RadioFly",
    propellers:4,
    maxSpeed:16
    },
]

const droneSeed = async () => {
  try {
    await Drone.deleteMany();
    await Drone.create(drones);
    console.log(`${drones.length} drones created`);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

droneSeed();