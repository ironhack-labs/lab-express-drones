const express = require('express');
const router = express.Router();

const Drone = require('../models/Drone.model')

// require the Drone model here

// All drones

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    Drone.find()
    .then((allDrones) => {

      res.render('./drones/list', {drones: allDrones})

    })
    .catch((err) => {

      console.log('there has been an error', err)
      next(err);
    
    })
});


// Create Drones

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
  .then((createdDrone) => {

      console.log('Drone Created:', createdDrone.name);
      res.redirect('/drones')

  })
  .catch((err) => {

    console.log('there has been an error', err)
    next(err);
    res.redirect('/drones/create')
  
  })

});


// Edit Drones

router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params;

  Drone.findById(droneId)
  .then((editDrone) => {

    res.render('./drones/update-form', {drone: editDrone})

  })
  .catch((err) => {
    console.log('there has been an error', err)
    next(err);
  
  })
  
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed})
  .then((updatedDrone) => {

    console.log(`${updatedDrone._id}`)

    res.redirect(`/drones`)

  })
  .catch((err) => {

    console.log('there has been an error', err)
    next(err);
    res.redirect(`/drones/${updatedDrone._id}/edit`)
  
  })

});


// Delete Drones

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params;

  Drone.findByIdAndDelete(droneId)
  .then(()=> {

    res.redirect('/drones')

  })
  .catch((err) => {

    console.log('there has been an error', err)
    next(err);
  
  })


});

module.exports = router;
