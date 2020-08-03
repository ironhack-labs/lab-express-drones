const express = require('express');

// require the Drone model here

const DroneModel = require('../models/Drone.model') 

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      console.log(drones)
      res.render('drones/list.hbs', {drones})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
  res.render('drones/create-form.hbs')
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
  .then(() => {
    res.redirect('/drones')
  })
  .catch(() => {
    res.render('drones/create')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  dronesModel.findById(req.params.id)
    .then((drone) => {
      res.render('drones/update-form', {drone})
  }) 
    .catch((err) => {
      console.log('ERROR!!!:', err)
  })
});


router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.params.id)
  dronesModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(() => {
      res.redirect('/drones')
  })
    .catch(() => {res.render('drones/:id/edit')
  })
});


router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  dronesModel.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/drones'))
    .catch((err) => console.log('ERROR!!!', err))
});

module.exports = router;
