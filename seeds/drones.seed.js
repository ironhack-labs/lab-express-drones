// Iteration #1
//Al ser un seed, tengo que meter los elementos a la base de datos (crearlos), entonces requiero de Mongoose
const mongoose = require('mongoose');


//Ahora tengo que hacer que este disponible el Model Schema del Dron para poder meterlo en los seeds
const Drone = require('../models/Drone.model')

//Tengo que conectarme a la base de datos

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose.connect(MONGO_URI)

const drones = [
    {
        name: "Creeper XL 500",
        propellers: 3,
        maxSpeed: 12 },
    {
        name: "Racer 57",
        propellers: 4,
        maxSpeed: 20,
    },
    {
        name: "Courier 3000i",
        propellers: 6,
        maxSpeed: 18
    }
  ];

Drone.create(drones)
.then((dronesFromDB)=>{
    console.log('All drones have Been added. There are:',dronesFromDB.length,'drones')
    mongoose.connection.close()
})
.catch(err=>console.log("ERROR ADDING drones SEEDS TO DATABASE"))