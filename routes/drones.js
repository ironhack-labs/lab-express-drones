// const express = require('express');
// const { isValidObjectId } = require('mongoose');

// const Drone = require('../models/Drone.model');

// const router = express.Router();

// router.get('/drones', (req, res, next) => {
//   Drone.find()
//     .then(dronesFound => res.render('drones/list', { drones: dronesFound }))
//     .catch(err => next(err))
// });

// router.get('/drones/create', (req, res, next) => res.render('drones/create-form'));

// router.post('/drones/create', (req, res, next) => {
//   const { name, propellers, maxSpeed } = req.body;

//   Drone.create( {name, propellers, maxSpeed} )
//     .then(() => res.redirect('/drones'))
//     .catch(err => next(err))
// });

// router.get('/drones/:id/edit', (req, res, next) => {
//     const { id } = req.params;
//     Drone.findById(id)
//       .then(foundDrone => res.render('drones/update-form', foundDrone))
//       .catch(err => next(err))
// });

// router.post('/drones/:id/edit', (req, res, next) => {
//   const { id } = req.params;
//   const { name, propellers, maxSpeed } = req.body;

//   Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
//     .then(droneToUpdate => res.redirect('/drones'))
//     .catch(error => res.redirect(`/drones/${id}/edit`));
// });

// router.post('/drones/:id/delete', (req, res, next) => {
//   const { id } = req.params;

//   Drone.findByIdAndDelete(id)
//     .then(() => res.redirect('/drones'))
//     .catch(err => next(err))
// });

// module.exports = router;
