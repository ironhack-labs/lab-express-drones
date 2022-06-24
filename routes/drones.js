const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res) => {
  // Iteration #2: List the drones
  Drone
    .find()
    .then(drone => {
      // console.log({ drone })
      res.render('drones/list', { drone })
    })
    .catch(e => console.log(e))

});

router.get('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  Drone
    .create({ name, propellers, maxSpeed })
    .then(res.redirect('/drones'))
    .catch(e => console.log('error, hermano'))
});

router.get('/drones/:drone_id/edit', (req, res) => {
  // Iteration #4: Update the droneç
  const { drone_id } = req.params
  // console.log('HOLAA!!!' + drone_id)

  Drone
    .findById(drone_id)
    .then(drone => {
      res.render('drones/update-form', drone)
    })
    .catch(e => console.log(e))
});

router.post('/drones/:drone_id/edit', (req, res) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  const { drone_id } = req.params

  // console.log('HOOOOLA!!' + drone_id)
  console.log('HEYYYY!!!!!! aAKIKIAKIKAIKI')

  Drone
    .findByIdAndUpdate(drone_id, { name, propellers, maxSpeed })
    .then(res.redirect('/drones'))
    .catch(e => console.log(e))
});

router.post('/drones/:drone_id/delete', (req, res) => {
  // Iteration #5: Delete the drone
  const { drone_id } = req.params

  Drone
    .findByIdAndDelete(drone_id)
    .then(res.redirect('/drones'))
    .catch(e => console.log(e))
});

module.exports = router;
