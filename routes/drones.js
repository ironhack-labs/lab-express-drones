const express = require('express');
require('../configs/db.config');

// require the Drone model here
let DroneModel = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones)=>{
      res.render('drones/list.hbs', {drones})
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then((response) => {
        res.redirect('/drones')
        console.log('THEN')
    })
    .catch(() => {
        res.render('create-form.hbs', {showFailureMessage: true})
        console.log('CATCH')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone)=> {
        res.render('update-form.hbs', {drone})
        console.log('Rendered')
    })
    .catch(() => {
        res.send('Something is wrong')
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id
    const {name, propellers, maxSpeed} = req.body;
    DroneModel.findByIdAndUpdate(id, {$set: {name: name, propellers: propellers, maxSpeed: maxSpeed}})
    .then((drone) => {
        res.redirect('/drones')
    })
    .catch(() => {
        res.send('Something is wrong')

    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
  .then(() => {
      res.redirect('/drones')
  })
  .catch(() => {
      res.send('Something is wrong')

  })
});

module.exports = router;


