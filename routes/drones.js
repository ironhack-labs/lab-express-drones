const express = require('express');
const router = express.Router();

//3.requerimos la carpetas donde ponemos todas las funciones del las rutas
const dronesControllers = require('../controllers/drones.controllers')

// require the Drone model here

//4.quitamos el req, res y ponemos el archivo completo de cada uno de las drones.controllers.js  list, create, etc


//**************algo entra aquí, va donde los controladores y lo ejecuta

// lo siguiente a la barra  "/" es lo que se ve en la pantalla de la web

router.get('/drones', dronesControllers.list);

router.get('/drones/create', dronesControllers.create);

router.post('/drones/create', dronesControllers.doCreate);// es donde metemos el formulario

router.get('/drones/:id/edit',dronesControllers.update);

router.post('/drones/:id/edit', dronesControllers.doUpdate);

router.post('/drones/:id/delete', dronesControllers.delete);

module.exports = router;
