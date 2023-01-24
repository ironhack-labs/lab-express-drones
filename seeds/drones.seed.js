//requerimos el modelo
const mongoose = require("mongoose");

const Drone = require('../models/Drone.model');


//Establecemos la coneccion con la base de datos, se puede usar la misma del archivo db/index.js
// ℹ️ Connects to the database*************importante

require('../db'); // esto es igual que db/index.js-conexion mongo


//interaccion 1

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];



//Once the database connection is established, call the Drone model's .create() method with the array as an argument.
//Si ha ido bien, pasarlo a la consola

Drone.create(drones)
.then(createDrone => {
    createDrone.forEach(drone =>{
        console.log(`${drone.name} has been created`)//itero en cada uno de ellos para verlos
    })
    console.log(`${drones.length} drones has been created`)// para contar el numero de drones creados
})
.catch(err => console.log(err))
.finally(()=> mongoose.connection.close())//cerrar conexión.

