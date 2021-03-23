const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  const drones = Drone.find()
  .then(drones =>{
    console.log(drones)
    res.render('drones/list', {drones})
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body;

  Drone.create(newDrone)
  .then(() => {
    res.redirect('/drones/list')
  })
  .catch(err => console.log('Erro ao criar novo drone ===> ', err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  
  const { id } = req.params;
  

  Drone.findById(id)
  .then(drone => {
    res.render('drones/update-form', {drone})
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const updatedDrone = req.body;
    const { id } = req.params;
  
  Drone.findByIdAndUpdate(id, updatedDrone)
  .then(() => {
    res.redirect('/drones/list')
  })
  .catch(err => console.log('Erro no update ===> ', err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  console.log(id)

  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect('/drones/list')
  })
  .catch(err => console.log('Erro ao deletar ===>', err))
});

module.exports = router;
