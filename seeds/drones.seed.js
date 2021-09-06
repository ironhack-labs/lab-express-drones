// Iteration #1
const mongoose = require('mongoose');
require('../db');
const Drone = require('../models/Drone.model');

const drones = [
	{name: "R2D2",
	propellers: 4,
    maxSpeed: 6
	}, 
	{name: "Balondefutbol",
	propellers: 2,
    maxSpeed: 166
	}, 
	{name: "RegaloDeTania",
	propellers: 14,
    maxSpeed: 2006

	}
]


// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
Drone.create(drones)
.then((dronesArray) => {
  console.log(`Created ${dronesArray.length} drones`);

  // Once created, close the DB connection
  mongoose.connection.close();
})
.catch((err) => console.log(`An error occurred while creating movies from the DB: ${err}`));