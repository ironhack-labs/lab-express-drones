const express = require('express');

const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => {
      res.render('list.hbs', {drones} )
      })
    .catch(() => {
      console.log("error")
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
        .then(() => {
          res.render('list.hbs')
        })
        .catch(() => {
          res.render('create-form.hbs')
        })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
  .then((result) => {
    res.render('drones/update-form.hbs', {result})
  })});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneId = req.params.id
  DroneModel.findByIdAndUpdate(droneId, {$set: {}})
      .then(() => {
          res.redirect('/drones')
      })
      .catch(() => {
        res.render('update-form.hbs')
      })    
    
  });

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/drones')
      })
})

module.exports = router;
