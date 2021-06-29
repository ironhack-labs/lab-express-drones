const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(allDrones => res.render('./drones/list', {allDrones}))
  .catch (err => console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  router.get('/create', (req, res, next) => {
  res.render('./drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then (CreateNewDrone => {
    console.log(CreateNewDrone)
    res.redirect('/drones')
  })
  .catch (err => {
    console.log(err)
    res.redirect('/drones/create')
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then(droneFoundById => res.render('./drones/update-form', droneFoundById))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body
  Drone.findById(id, {name, propellers, maxSpeed})
  .then((updatedDrone) => {
    console.log(updatedDrone)
    res.redirect('/drones')
    })
  .catch(err => {
    console.log(err)
    res.redirect(`/${id}/edit`)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
