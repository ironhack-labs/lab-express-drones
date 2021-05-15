const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res) => {
  Drone.find()
    .then(dronesFound => res.render('drones/list', {dronesFound}))
    .catch(err => console.log(`Error while fetching drones from db: ${err}`))
});

router.get('/drones/create', (req, res) => res.render('drones/create-form'));

router.post('/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
    .then(() => {
    res.redirect('drones')
   })
   .catch((err) => {
     console.error("error making drone");
     next(err);
   })
 });

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  
  Drone.findById(id)
    .then(droneToEdit =>{
      //console.log(droneToEdit)
      res.render('drones/update-form', {drone : droneToEdit})
    })
    .catch(err => next(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const {name, propellers, maxSpeed} = req.body
  
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
    .then((droneToEdit)=> res.redirect('/drones'))
    .catch(err => next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(()=> res.redirect('/drones'))
    .catch(err => next(err))
});

module.exports = router;
