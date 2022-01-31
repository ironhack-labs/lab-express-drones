const express = require('express');
const res = require('express/lib/response');
const { listenerCount } = require('../models/Drone.model');
const router = express.Router();


// require the Drone model here
const Drone = require('../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allDronesFromDB => {
      console.log('items from alldronesfromdb', allDronesFromDB);
      res.render('drones/list.hbs', { drone: allDronesFromDB })
    })
    .catch(error => {
      console.log('Error getting drones from the DB: ', error);
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
    .then (() => res.redirect('/drones'))
    .catch (error => res.redirect('/drones'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  
  Drone.findById(id)
    .then(editDrone => {
    //console.log('CONSOLE:',editDrone)
    res.render('drones/update-form.hbs', { drone: editDrone });
    })
    .catch (error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    .then (updated => res.redirect('/drones'))
    .catch(error => next(error))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => (error))
});

module.exports = router;
