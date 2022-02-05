// Iteration #1 semillas
const mongoose = require('mongoose');

const Drone = require('../models/Drone.model');  // requiero modelo que tengo que crear

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones"; //localhost de mi index, para conectarme a la base de datos

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });

    //array con los 3 objetos 
    const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

//se llama al método Drone del modelo.create()con el arrayr como argumento.
Drone.create(drones)
    .then(dronesFromDB => {
        console.log(`Created ${dronesFromDB.length} books`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
