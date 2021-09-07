// Iteration #1
// Configuración de la dependencia dotenv
require("dotenv/config")

// Conexión a la BBDD (misma BBDD de la aplicación)
require('../db')

const Drone =  require('./../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone
  .create(drones)
  .then(dronesFromDb =>{
      console.log(`Se ha creado ${dronesFromDb} en la base de datos`)
  })
  .catch(error =>{
      console.log("ha ocurrido un error al crear drones en la bd",error)
  })