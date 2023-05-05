const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')


// LISTAR DRONES
router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(allDrones => res.render('drones/list' , {droneList: allDrones}))
  .catch(err => console.log(err))
});

// ----------------------------------------------------------------------------------------

// CREAR DRONES
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  
  const {name , propellers, maxSpeed} = req.body

  Drone.create({name , propellers , maxSpeed})
  .then(res.redirect('/drones'))
  .catch(err => console.log(err))

});


// ----------------------------------------------------------------------------------------

// EDITAR DRONES
router.get('/drones/:id/edit', (req, res, next) => {

  const {id} = req.params

  Drone.findById(id)
  .then(drone => res.render('drones/update-form' , drone))
  .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {
  // res.send(req.body)
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(res.redirect('/drones'))
  .catch(err => console.log(err))

});

// ----------------------------------------------------------------------------------------

// ELIMINAR DRONES
router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then(res.redirect('/drones'))
  .catch(err => console.log(err))  
});


module.exports = router;
