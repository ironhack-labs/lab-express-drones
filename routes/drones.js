const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('./../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone
    .find()
    .then(drones => res.render('drones/list', { drones }))
    .catch(err => console.log(err))
});


router.get('/drones/create', (req, res, next) => {
  //funciona en terminal y se queda pensado console.log("hola")
  res.render("drones/create-form")


  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => console.log(err))// Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render("drones/update-form.hbs", drone))
    .catch(err => console.log(err))

  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(drone => res.redirect(`/drones`))
    .catch(err => console.log(err))// Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params
  Drone
    .findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch(err => console.log(err))

  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
