const express = require('express');
const mongoose = require('mongoose');
// require the Drone model here
const Drone = require("../models/Drone.model")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((drone) => {
    
    res.render('drones/list',{drones: drone})

    })
  .catch((e) => console.log(`Error finding in the db`, e))
  })
  
;

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
  
});

router.post('/drones/create', (req, res, next) => {
  const {name,propellers,maxSpeed} = req.body;

  Drone.create({name,propellers,maxSpeed})
  .then((newDrone) => console.log(`A new drone named ${newDrone.name} has been added to the DB`))
    .then(() => {
      res.redirect('/drones');
    })

  .catch((e) => console.log(e))
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then(droneToEdit => {
    res.render('drones/update-form',{drone: droneToEdit})
  })
  .catch(e => console.log('Error uopdating the document', e))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  console.log(name)

  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, {new: true})
  .then(updatedDrone => {
    console.log(`Drone ${updatedDrone.name} have been updated`)
    res.redirect('/drones')})
  .catch(e => console.log(e))
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then((deletedDrone) => {
  console.log(`The drone ${deletedDrone.name} has been deleted`)
  res.redirect('/drones')
})
  .catch(e => console.log('He fallado' , e))
});

module.exports = router;
