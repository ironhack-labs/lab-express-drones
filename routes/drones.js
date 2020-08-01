const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((dronesArray) => res.render('drones/list.hbs', {dronesArray}))
    .catch((err) => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(() => {
      console.log('Value added: ')
      res.redirect('/drones')
    })
    .catch((err) => {
      console.log('Something went wrong while adding a value :', err)
      res.render('drones/create-form.hbs', {failDrone : true})
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((result) => res.render('drones/update-form.hbs', {result}))
    .catch((err) => console.log('Something went wrong while going to edit page: ', err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {name, propellers, maxSpeed} = req.body
  DroneModel.findByIdAndUpdate(req.params.id, {$set: {name, propellers, maxSpeed}})
    .then(() => {
      console.log('Value updated')
      res.redirect('/drones')
    })
    .catch((err) => {
      console.log('Something went wrong while adding a value :', err)
      res.render('drones/create-form.hbs', {failEditDrone : true})
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Value deleted")
      res.redirect('/drones')
    })
    .catch((err) => console.log('Something went wrong while deleting:' , err))
});

module.exports = router;
