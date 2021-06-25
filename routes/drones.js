const express = require('express');
const router = express.Router();

const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((drones) =>{
      res.render('drones/list.hbs', {drones})
    })
    .catch(() => {
      next('drone fetch fail')
    })
    
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  // console.log(name, propellers, maxSpeed)
  DroneModel.create({name, propellers, maxSpeed})
    .then(() =>{
      res.redirect('/drones')
    })
    .catch(() =>{
      next('Create failed')
    })
});

router.get('/drone/:id/edit', (req, res, next) => {
  let dynamicId = req.params.id

  DroneModel.findById(dynamicId)
  .then((drone) => {
      res.render('drones/update-form.hbs', {drone})
  })
  .catch(() => {
    next('Cannot find done details')
  })

});

router.post('/drone/:id/edit', (req, res, next) => {
  let dynamicId = req.params.id
  const {name, propellers, maxSpeed} = req.body

  DroneModel.findByIdAndUpdate(dynamicId, {name, propellers, maxSpeed})    
    .then(() => {
        res.redirect('/drones')
    })
    .catch(() => {
        next('Edit failed')
    })
});

router.post('/drone/:id/delete', (req, res, next) => {
  console.log("hello")
  let dynamicId = req.params.id

  DroneModel.findByIdAndDelete(dynamicId)
    .then(() =>{
      res.redirect('/drones')
    })
    .catch(() => {
      next('Deleting specific drone failed')
    })
});

module.exports = router;
