// To insert in "seeds/movies.seed.js"
//Not this part!!! Because it’s in the —>>> db>index.js
const mongoose = require("mongoose");
// Name of the Model will be --> Drone
const Drone = require("../models/Drone.model");
// Require the Model
const Movie = require("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});


// DRONES PROVIDED TO SEED THA DATABASE
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

// Create the drones with method Model.create
Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurs while creating the database ${err}`));