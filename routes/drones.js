const express = require('express');
const Drone = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
    Drone.find()
      .then(dronesDB => res.render('drones/list', {dronesDB}))
      .catch(error => console.log('an error occurred while loading drones from the DB', error))
    // Iteration #2: List the drones
    // ... your code here
});

router.get('/drones/create', (req, res, next) => {
    res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
    .then(droneEntry => {
      console.log(droneEntry)
      res.redirect('/drones')
    })
    .catch(error => {
      console.log('error while saving drone to DB', error)
      res.render('/drones/create')
    })
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
    const {id} = req.params
    Drone.findOne({_id :id})
      .then(drone => res.render('drones/update-form', {drone}))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, { new: true })
    .then(droneDB => console.log('updated drone on DB', droneDB))
    .then(()=> res.redirect('/drones'))
    .catch(error => console.log('error while updating drone to DB', error))
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params

  Drone.findByIdAndRemove({_id : id})
    .then(() => res.redirect('/drones') )
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
