const express = require('express');
const router = express.Router();

const Dron = require('../models/Drone.model.js');
const DroneModel = require('../models/Drone.model.js');

router.get('/drones/list', (req, res, next) => {
  // Iteration #2: List the drones
  Dron
    .find()
    .then(allDrones => res.render('drones/list', { drone: allDrones }))
    .catch(err => console.log(err))
});

router.get('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create-form', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body

  Dron
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones/list'))
    .catch(() => res.redirect('/drones/create-form'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  Dron
    .findById(id)
    .then(drone => res.render("drones/update-form", drone))
    .catch(err => console.log(err))
});


router.post('/drones/:id/edit', (req, res, next) => {

  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params
  Dron
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones/list'))
    .catch(() => res.redirect(`/drones/${id}/edit`))

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params

  Dron
    .findByIdAndDelete(id)
    .then(() => res.redirect('/drones/list'))
    .catch(err => console.log(err))
});

module.exports = router;
