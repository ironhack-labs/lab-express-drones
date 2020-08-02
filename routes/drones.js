const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
        .then((drones) => {
            res.render('drones/list.hbs', {drones})
        })
        .catch((error) => {
            console.log(error)
        })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((error) => {
      console.log(error)
      res.render('drones/create-form.hbs')
    })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
        .then((result) => {
            res.render('drones/update-form.hbs', {result})
        })
});



router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let {name, propellers, maxSpeed} = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, {$set: {name, propellers, maxSpeed}})
        .then((result) => {
            res.redirect('/drones')
        })
        .catch ((error) => {
          console.log(error)
          res.render('drones.update-form.hbs')
        })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.redirect('/drones')
    })
});

module.exports = router;
