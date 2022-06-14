const { response } = require('express');
const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require ('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((allDronesFromDB) => {
    console.log(allDronesFromDB);
    res.render('drones/list.hbs', {drones : allDronesFromDB})
  })
  .catch(err => next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(err => {
    next(err);
    res.render('drones/create-form.hbs')
  });
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
  .then(droneToEdit => res.render('drones/update-form.hbs', {drone: droneToEdit}))
  .catch(err => next(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone => res.redirect('/drones'))
  .catch(err => next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});


module.exports = router;
