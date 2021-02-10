const express = require('express');
const Drone = require('../models/Drone.model.js')

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  console.log(Drone)
  Drone.find({})
    .then((dronesDB) => {
      console.log(dronesDB)
      res.render('drones/list', {dronesDB})
    })
    .catch(error => console.log(error))
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  console.log(req.body)
  const name = req.body.name
  const propellers = req.body.propellers
  const maxSpeed = req.body.maxSpeed
  Drone.create({
    name: name,
    propellers: propellers,
    maxSpeed: maxSpeed
  }).then((droneCreated) => {
    console.log(`A Drone has been created: ${droneCreated}`)
    res.redirect('/drones')
  }).catch(error => console.log(error))
});

router.get('/drones/edit/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Drone.findById(id)
    .then((droneToBeEdited) => {
      res.render('drones/update-form', {droneToBeEdited})
    })
    .catch(error => console.log(error))
});

router.post('/drones/edit/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  const { name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed}, { new: true })
    .then((droneToBeEdited) => {
      res.redirect('/drones')
    })
    .catch(error => console.log(error))
});

router.post('/drones/delete/:id', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const id = req.params.id
  console.log(id)
  Drone.findByIdAndRemove(id)
    .then((droneDeleted) => {
      console.log(droneDeleted)
      res.redirect('/drones')
    })
    .catch((error) => next(error))
});

module.exports = router;
