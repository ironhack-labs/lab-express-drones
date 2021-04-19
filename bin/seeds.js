//Importar el modelo movie para poder crear instancias de esta clase a partir del array de movies
const mongoose = require('mongoose');
const Drone = require('../models/Drone')

//Requerir la configuración de la base de datos
require('../configs/db.config')

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

//Crear películas (si pasamos un array como argumento, mongoose automáticamente me va a iterar sobre ellos y por tanto crearme todas las películas)
Drone.create(drones)
.then((result)=>{
  console.log(result)
  mongoose.connection.close()
})
.catch((err)=>{
  console.log(err)
})