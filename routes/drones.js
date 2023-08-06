const express = require('express');
const router = express.Router();
const Drone = require('./../models/Drone.model')


router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propeller, maxSpeed } = req.body
  Drone
    .create({ name, propeller, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  Drone
    .findById(id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propeller, maxSpeed } = req.body;
  console.log(id, req.body)
  Drone
    .findByIdAndUpdate(id, { name, propeller, maxSpeed })
    .then(() => res.redirect(`/drones`))
    .catch(() => res.redirect(`drones/update-form`));
});


router.post('/drones/:id/delete', (req, res) => {
  const { id } = req.params;

  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err));
});

module.exports = router;
