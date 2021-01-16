const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

// GET Drones List
router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(dronesFromDB =>
    res.render('drones/list.hbs', { dronesFromDB }))
    .catch(err => console.log(`Error occurred while retrieving drones: ${err}. `))
});

// GET Create Drones
router.get('/drones/create', (req, res, next) => {
  Drone.find()
  .then(dronesFromDB =>
    res.render('drones/create-form.hbs', { dronesFromDB }))
    .catch(err => console.log(`Error occurred while navigating to create drones: ${err}. `))
});

// POST Create Drones
router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(() => 
    res.redirect("/drones"))
    .catch(err => console.log(`Error occured while creating drones: ${err}.`))
});

// GET Edit Drones
router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id)
  .then(droneToUpdate => 
    res.render("drones/update-form", { droneToUpdate }))
    .catch(err => console.log(`Error occured while navigating to edit page: ${err}.`))
});

// POST Edit Drones
router.post('/drones/:id/edit', (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
  .then(() =>
    res.redirect('/drones'))
    .catch(err => console.log(`Error occurred while updating drone: ${err}.`))
    
    // Re-rendering to update-form with fields still populated: Cleaner way to do this?
    // Causes POST header error.
    .then(() => 
      Drone.findById(req.params.id))
      .then(droneToUpdate => 
      res.render("drones/update-form", { droneToUpdate }))
});

// POST Delete Drones
router.post('/drones/:id/delete', (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
  .then(() =>
  res.redirect('/drones'))
  .catch(err => console.log(`Error occurred while deleting drone: ${err}.`))
});

module.exports = router;
