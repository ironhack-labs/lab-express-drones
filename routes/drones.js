const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

router.get('/drones', (req, res, next) => {
  Drone.find({})
  .then((drones) =>{
    res.render('drones/list', {drones})
  })
  .catch(err => console.error(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.create({name, propellers, maxSpeed})
  .then((drone) =>{
    res.redirect("/drones")
  })
  .catch(error => {
    res.render('drones/create-form', { errorMessage: 'Please introduce your drone again' }) 
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then((drone) =>{
    console.log(drone)
    res.render('drones/update-form', drone)
  })
  .catch(error =>{
    console.error(error)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed})
  .then(() => {
    res.redirect('/drones')
  })
  .catch(()=>{
    red.redirect('drones/update-form', {errorMessage: 'Please try again'})
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.redirect('/drones')
  })
  .catch(error => console.error(error))
});

module.exports = router;
