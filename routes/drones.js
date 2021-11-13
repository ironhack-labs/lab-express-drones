const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    Drone.find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list", { drones });
    })
    .catch((err) => {
      console.log(err);
    });
  
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("../views/drones/create-form.hbs")
});

router.post('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone

    const {name, propellers, maxSpeed} = req.body
    Drone.create({name, propellers, maxSpeed})
    .then(newDrone=>{
      console.log(newDrone)
      res.render("../views/newDroneSuccess.hbs", newDrone)
    })
    .catch((err) => {
      console.log(err);
    });
  

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
