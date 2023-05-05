const express = require('express');
const router = express.Router();


const Drone = require('../models/Drone.model')


// READ DRONES
router.get('/drones', (req, res, next) => {

  Drone
    .find()
    .then(allDrones => res.render('drones/list', { drones: allDrones }))
    .catch(error => console.log(error));

});

// CREATE DRONES
router.get('/drones/create', (req, res, next) => {

  res.render("drones/create-form")

});

router.post('/drones/create', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(newDrone => res.redirect('/drones'))
    .catch(err => {
      // alert('TRY AGAIN')
      res.redirect('/drones/create')
    })

});

// EDIT DRONES
router.get('/drones/:id/edit', (req, res, next) => {

  const { id } = req.params

  Drone
    .findById(id)
    .then(drone => res.render("drones/update-form", drone))
    .catch(err => console.log(err))

});

router.post('/drones/:id/edit', (req, res, next) => {

  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params      // ID para .findByIdAndUpdate()

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => console.log(err))

});

// DELETE DRONES
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
