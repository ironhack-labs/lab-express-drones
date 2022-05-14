//primero requiero mongoose creando una variable
const mongoose = require('mongoose');
require('../db')
//conecto la url de la base de datos con este puerto especificamente, despues de la barra estoy diciendo que base de datos quiero exactamente

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
  
  const drones = [
    { 
    name: "Creeper XL 500", 
    propellers: 3, 
    maxSpeed: 12 
},
    { 
    name: "Racer 57", 
    propellers: 4, 
    maxSpeed: 20 
},
    { 
    name: "Courier 3000i", 
    propellers: 6, 
    maxSpeed: 18 
}
  ];
// especifico la estructura de la variable movies
const Drones = require("../models/Drone.model");

const seedDrones = async () => {
  try {
    // tengo que escribir esto para que cada vez que lo ejecute borre lo anterior y no se duplique
    await Drones.deleteMany();
    const createDrones = await Drones.create(drones);
    console.log(`${createDrones.length} drones created`);
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};
seedDrones();
