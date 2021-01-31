const express = require('express');
const Drone = require('../models/Drone.model')

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
  .find(
    req.query.name
      ? {
          name: { $regex: req.query.name, $options: "i" },
        }
      : {}
  ).then((drones) => {
    const results = drones.length;
    res.render('drones/list', {drones: drones, search: req.query.name, results: results})
  })
  .catch((e) => next(e));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const drone = req.body;
  Drone.create(drone)
  .then(() => {
    res.redirect('/drones')
  })
  .catch((e) => res.redirect('/drones/create'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
  .then((drone) => {
    res.render('drones/update-form', {drone})
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findOneAndUpdate( { _id: req.body._id } , { name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed})
  .then(() => {
    res.redirect('/drones')
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.deleteOne( {_id: req.body._id } )
  .then(() => {
    res.redirect('/drones')
  })
});

module.exports = router;
