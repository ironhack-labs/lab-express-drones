// Iteration #1

const mongoose = require('mongoose'); //Importante para definir mongoose más abajo y cerrar la conexión

const drones = [
    { name: "Aokiji 57", propellers: 3, maxSpeed: 12 },
  { name: "Kizaru 07", propellers: 4, maxSpeed: 20 },
  { name: "Akainu 3000i", propellers: 6, maxSpeed: 18 }
]

require("dotenv/config");
require("../db");

const Drone = require("../models/Drone.model");

Drone.create(drones)
  .then((dronesFromDB) => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close(); //Cerramos la conexión con Mongoose ya que no volveremos a cargar la base de datos desde aquí
  })
  .catch((err) =>
    console.log(`An error occurred while creating drones from the DB: ${err}`)
  );