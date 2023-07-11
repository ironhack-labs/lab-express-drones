const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model.js');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drone) => {
      res.render('drones/list', { drone })
    })
    .catch((err) => { console.log(err) });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => { console.error(err) })
});


router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render('drones/create-form', { drone })
    }
    )
    .catch((err) => { console.error(err) })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log("is editing")
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, req.body, { new: true })
    .then((drone) => {
      res.redirect(`/drones/${drone._id}`)
    })
    .catch((err) => { console.error(err) })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/drones')
    })
    .catch((err) => { console.error(err) })
});

router.get('/drones/:id', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render('drones/detail', { drone })
    })
    .catch((err) => { console.error(err) })
})
module.exports = router;
