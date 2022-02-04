const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .then(allDrones => res.render('drones/list', { allDrones }))
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const { name, propellers, maxSpeed  } = req.body

  Drone
    .create( {name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))
    //.catch(() => res.render('drones/create'))     // renderizo a la misma página para que el usuario lo vuelva a intentar
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone

    const { id } = req.params
  
    Drone
      .findById(id)
      //.then(droneToEdit=> res.send({droneToEdit}))
      .then(droneToEdit => res.render('drones/update-form', droneToEdit))
      .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const { id } = req.params
    const { name, propellers, maxSpeed} = req.body

    Drone
      .findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
      .then(() => res.redirect('/drones'))
      .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
    const { id } = req.params
  
    Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;

