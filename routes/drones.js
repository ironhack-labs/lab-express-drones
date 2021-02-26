const express = require('express');

// require the Drone model here
const DroneModel = require('./../models/droneModel')

const router = express.Router();

// Iteration #2: List the drones
router.get('/', (req, res, next) => {
  DroneModel.find()
  .then(dbSuccess => {
    let data = {
      drones : dbSuccess, 
      css : ['drones']
    }
    res.render('drones/list', data)
  })
  .catch(err => {
    next(err);
  });
});


// Iteration #3: Add a new drone
router.get('/create', (req, res, next) => {
  res.render('drones/create-form')
});

// Iteration #3: Add a new drone
router.post('/create', (req, res, next) => {
  console.log('drone created');
  DroneModel.create(req.body)
  .then(() => res.redirect('/drones'))
  .catch(err => next(err));
});

// Iteration #4: Update the drone
router.get('/:id/edit', (req, res, next) => {
  DroneModel.findById(req.params.id)
  .then(drone => res.render('drones/update-form', {drone}))
  .catch(err => next(err));
});

// Iteration #4: Update the drone
router.post('/:id/edit', (req, res, next) => {
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.redirect('/drones'))
  .catch(err => next(err));
});

// Iteration #5: Delete the drone
router.get('/:id/delete', (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/drones'))
  .catch(err => next(err));
});

module.exports = router;
