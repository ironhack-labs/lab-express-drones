const express = require('express');
const router = express.Router();

//3.requerimos la carpetas donde ponemos todas las funciones del las rutas
const dronesControllers = require('../controllers/drones.controllers')

// require the Drone model here

//4.quitamos el req, res y ponemos el archivo completo de cada uno de las drones.controllers.js  list, create, etc


//algo entra aquí, va donde los controladores y lo ejecuta

// lo siguiente a la barra  "/" es lo que se ve en la pantalla de la web

router.get('/drones', dronesControllers.list);

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
