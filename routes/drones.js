const express = require('express');

// require the Drone model here
const DroneModel = require('../models/drone.model')

const router = express.Router();


const drones = require('../bin/seeds');
console.log(drones);


router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
    DroneModel.find()
      .then((dbRes) => {
        console.log(dbRes);
        res.render("../views/drones/list.hbs", {
          drones: dbRes,
        });
      })
      .catch((dbError) => {
        next(dbError);
      }); 
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
