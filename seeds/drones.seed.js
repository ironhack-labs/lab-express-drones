// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose
	.connect("mongodb://localhost/lab-express-drones", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})

	.then((dbConnection) => {
		console.log(`Connected to ${dbConnection.connection.name}`);

		Drone.create(drones)
			.then((createDrone) => {
				console.log(createDrone.length)
			})

			.catch((error) => {
				console.log(error);
			});

	})

	.catch((error) => {
		console.log("there is an error", error);




	});



