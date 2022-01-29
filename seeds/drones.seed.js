const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
//Establecer una conexión con la base de datos
require('../db/index');


//Cree una matriz de 3 objetos, cada uno con name, propellersy 
//maxSpeedcomo nuestros drones iniciales.
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

//Una vez que se establece la conexión con la base de datos, 
//llame al método Dronedel modelo .create()con la matriz como argumento.

Drone.create(drones)
    .then((results) => {
      console.log('Success', results);
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log('Something went wrong', err);
    });
