const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(dronesFromDB => {
      //console.log(dronesFromDB);
      res.render("drones/list", {drones: dronesFromDB});
  })
  .catch(err => {
      console.log("Error getting drones from DB", err);
      next();
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // POST route to save a new drone to the database in the drones collection
  //console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { droneId } = req.params;
  //console.log(req.params);
   
  Drone.findById(droneId)
      .then(droneToEdit => {
          //console.log(droneToEdit);
          res.render('drones/update-form.hbs', { drone: droneToEdit });
      })
      .catch(error => next(error));
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const { droneId } = req.params;
    const { name, propellers, maxSpeed } = req.body;
   
    Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
        .then(updatedDrone => res.redirect(`/drones`))
        .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
