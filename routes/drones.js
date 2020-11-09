const express = require('express');
const router = express.Router();
const Drone = require('../models/drone.model');

/*/drones...*/
router.get('/drones/', (req, res) => {
  Drone.find().then((allDronesFromDb) => {
    res.render('drones/list', { myDrones: allDronesFromDb });
  })
  .catch(error => console.log("Error while getting the drones from the DB: ", error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  Drone.create({name: req.body.name, propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed}).then(()=>{
  res.redirect('/drones/list')
});
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id).then((drone)=>{
  res.render('drones/update-form', drone)
});
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, {name: req.body.name, propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed}).then(()=>{
  res.redirect('/drones/list') 
});
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndUpdate(req.params.id, {name: req.body.name, propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed}).then(()=>{
  res.redirect('/drones/list') 
});
});

module.exports = router;
