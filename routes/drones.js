//1. IMPORTACIONES
const express = require('express');
const router = express.Router();

const droneController =require("./../controllers/droneController")


//2. -----------------------RUTAS de la BASE URL-----------------------
router.get('/drones', droneController.listDrones)


//3. -------------Iteration #3: Add a new drone-------------
router.get('/drones/create', droneController.viewCreatedDrone)

router.post('/drones/create', droneController.createDrone);

//-------------Iteration #4: Update the drone-------------
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
