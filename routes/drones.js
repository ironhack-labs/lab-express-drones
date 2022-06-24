const express = require('express');
const router = express.Router();

const Drone = require('./../models/Drone.model.js')

router.get('/drones', (req, res, next) => {
  // res.send('vaa??')
  Drone
    .find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
}),

  router.post('/drones/create', (req, res) => {

    const { name, propellers, maxSpeed } = req.body

    Drone
      .create({ name, propellers, maxSpeed })
      .then(drones => { res.redirect('/drones') })
      .catch(err => console.log(err))
  });

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // res.send('Vaa?')
  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

module.exports = router;
