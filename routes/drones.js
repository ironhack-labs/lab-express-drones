const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model')

// ------------------
// Drone listing
// ------------------

router.get('/lista-drones', (req, res) => {

  Drone
    .find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))



});

// ------------------
// Drone creation
// ------------------
router.get('/crear-drones', (req, res) => {
  res.render('drones/create-form')

});

router.post('/drones/create-form', (req, res) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(newDrone => {
      res.redirect('/lista-drones')
    })
    .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res) => {

  const { id } = req.params

  Drone
    .findById(id)
    .then(drones => {
      res.render('drones/update-form', drones)
      console.log('ESTO ES DRONES POR ID' + drones)
    })
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res) => {

  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drones => {
      res.redirect('/lista-drones')
    })
    .catch(err => console.log(err))

});

router.post('/drones/:id/delete', (req, res) => {
 
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => {
      res.redirect('/lista-drones')
    })
    .catch(err => console.log(err))
});

module.exports = router;
