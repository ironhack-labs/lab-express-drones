const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();


router.get('/drones', (req, res, next) => {
  Drone.find()
    .then(dronesFound => {
      console.log(dronesFound)
      res.render('drones/list.hbs', { drones: dronesFound })
    })
    .catch(err => {console.log('something went wrong retreiving drones')})
});


router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs');
});


router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body
  console.log (name, propellers, maxSpeed)

  Drone.create({name, propellers, maxSpeed})
    .then(() =>  {
      console.log('Drone successfully created')
      res.redirect('/drones');
    })
    .catch(err => {
      console.log('Whoops, something went wrong')
      res.redirect('/drones/create')
    })
});


router.get('/drones/:id/edit', (req, res, next) => {
  const droneID = req.params.id

  Drone.findById(droneID)
    .then(droneToUpdate => {
      res.render('drones/update-form.hbs', { drone: droneToUpdate })
    })
    .catch(error => next(error));
});


router.post('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(droneId, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone => res.redirect('/drones')) 
  .catch(error => res.render('/drones/update-form.hbs'));
});


router.post('/drones/:id/delete', (req, res, next) => {
  const droneId = req.params.id

  Drone.findByIdAndDelete(droneId)
    .then(droneDeleted => {
      console.log(`${droneDeleted.name} has been deleted`)
      res.redirect('/drones')
    })
    .catch(error => console.log('error when attempting to delete drone'))
});


module.exports = router;
