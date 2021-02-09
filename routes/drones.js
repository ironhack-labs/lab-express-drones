const express = require('express');
const Drone = require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
    // LOCALIZACIÓN DE LOS LIBROS
    Drone.find()
    .then((showAllDrones) => {
      console.log(showAllDrones)
      res.render("drones/list", {showAllDrones})
    }).catch(error => {
      console.log("No pudimos conseguir los drones")
      next(error)
    })


  // Iteration #2: List the drones
  // ... your code here
});

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
