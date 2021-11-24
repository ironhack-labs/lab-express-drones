
//1. IMPORTACIONES
const express = require('express');
const router = express.Router();

const droneController    = require("./../controller/droneController")

//2. RUTEO CON BASE URL
//CREAR DRONE - VISTA (PARA VER EL FORMULARIO)
router.get("/create", droneController.viewCreateDrone)

//CREAR DRONE - RUTA PARA EL FORMULARIO
router.post("/create", droneController.createDrone)

//READ
//LECTURA DE LIBROS CREADOS
router.get("/", droneController.getAllDrones)

//LECTURA DE UN LIBRO ESPECIFICO
router.get("/:droneID", droneController.getDrone)

//EDIT
//EDITAR UN DRONE
router.get("/:droneID/edit", droneController.viewEditDrone)
router.post("/:droneID/edit", droneController.editDrone)

//DELETE
//BORRAR UN LIBRO ESPECIFICO
router.post("/:bookID/delete", droneController.deleteDrone)


// EXPORTACION
module.exports = router

















// router.get('/drones', (req, res, next) => {
//   // Iteration #2: List the drones
//   // ... your code here
// });

// router.get('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.post('/drones/create', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
// });

// router.get('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
// });

// router.post('/drones/:id/delete', (req, res, next) => {
//   // Iteration #5: Delete the drone
//   // ... your code here
// });

module.exports = router;
