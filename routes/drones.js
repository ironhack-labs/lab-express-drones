const express = require('express');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  
});

router.get('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  DroneModel.create({name, propellers, maxSpeed})
    .then(() => res.redirect('/drones'))
    .catch(error => {res.render('drones/create-form')});
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} =req.params;

  DroneModel.findById(id)
  .then(droneToEdit =>{res.render('drones/update-form', {drone: droneToEdit});})
  .catch(error => next(error))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  console.log(req.body)

  DroneModel.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true})
  .then(updatedDrone => res.redirect('/drones'))
  .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} = req.params;

  DroneModel.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
