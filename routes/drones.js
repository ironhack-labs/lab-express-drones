const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require ('../models/Drone.model.js');


router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(allTheDronesFromDB => {
    res.render('drones/list', {allTheDronesFromDB})
  })
  .catch(err => console.log(`Something went wrong with getting all the drones ${err}`))
});

router.get('/drones/create', (req, res, next) => {
 res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {

const {name, propellers, maxSpeed} = req.body;

Drone.create({name, propellers, maxSpeed})
.then(newDrone => {
  console.log(newDrone);
  res.redirect('/drones')
})
.catch(err => console.log(`Error while saving data ${err}`))

});

router.get('/drones/:id/edit', (req, res, next) => {

 Drone.findById(req.params.id)
 .then(oneDrone => {
   res.render('drones/update-form', {oneDrone})
 })
 .catch()
});

router.post('/drones/:id/edit', (req, res, next) => {

  const {name, propellers, maxSpeed} = req.body;

Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, {new: true})
.then(updatedDrone => {
  console.log(`updared Drone`, updatedDrone)
  res.redirect('/drones')
})
.catch(err => `Something went wrong with editing this drone: : ${err}`)
});

router.post('/drones/:id/delete', (req, res, next) => {
Drone.findByIdAndRemove(req.params.id)
.then(()=> res.redirect('/drones'))
.catch(err=> console.log(`Something went wrong with deleting this drone: : ${err}`))
});

module.exports = router;
