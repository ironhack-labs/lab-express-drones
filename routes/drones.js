const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(drones => {
    res.render("drones/list", { drones });
    // console.log('Render drones list', { drones });
  })
  .catch(err => {console.log("An error occurred while getting the list of drones", err)})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed} = req.body;

  Drone.create({ name, propellers, maxSpeed })
  .then(newSavedDrone => {
    res.redirect("/drones");
  })
  .catch(err => {
    console.log("An error occurred while creating the drone", err);
    res.redirect('drones/create')
  })
  
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((droneToBeEdited) => {
    res.render("drones/update-form.hbs", droneToBeEdited);
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, {new: true})
  .then(() => {
    res.redirect("/drones");
  })
  })

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/drones");
  })
  .catch(err => console.log("An error occurred while trying to delete drone", err))
});

module.exports = router;
