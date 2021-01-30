// Iteration #1
// Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones.
const Drones = [
    {
        name:"Drone fx1",
        propeller:23,
        maxSpeed:130,
    },
    {
        name:"Drone fx2",
        propeller: 4,
        maxSpeed: 160,
    },
    {
        name:"Drone fx3",
        propeller:8,
        maxSpeed:200,
    },
]


// iibs requeries

require("dotenv").config();
require("../configs/db.config");
const mongoose = require('mongoose');
 
//Call the Drone model's .create() method with the array as an argument.

const Drone = require("../models/Drone.model");

Drone.deleteMany()
.then( () =>  {
  Drone.create(Drones)
  .then(drones => console.log(`${drones.length} Drones saved: `))
  .finally(() => {
    mongoose.connection
      .close()
      .then(() => console.log("Database close"))
      .then(() => process.exit());
  })
  .catch(error => { console.error('Error saving drones', error); })
}
)
.catch(e => console.log (`Error al borrar Drone collection: ${e}`))

