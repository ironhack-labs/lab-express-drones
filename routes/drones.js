const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
 Drone.find()
 .then (allTheDronesFromDB => {
   console.log(allTheDronesFromDB);
   res.render('drones/list', {drones: allTheDronesFromDB});
 })
 .catch(error =>
  console.log(`Error while getting the drones from the DB: ${error}`));
});

router.get('/drones/create', (req, res, next) => {
 res.render('drones/create-form');
});

router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(error => `Error while creating a new drone: ${error}`);
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
  .then(droneToEdit => {
    res.render ('drones/update-form', droneToEdit);
  })
  .catch(error =>
    console.log(`Error while getting a single drone to edit: ${error}`));
});

router.post('/drones/:id/edit', (req, res) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    id, 
    { name, propellers, maxSpeed },
    { new: true }
  )
  .then(updatedDrone => res.redirect(`/drones`))
  .catch(error =>
    console.log(`Error while updating a single drone: ${error}`))
});

router.post('/drones/:id/delete', (req, res) => {
 const { id } = req.params;

 Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => console.log(`Error while deleting a drone: ${error}`));
});



module.exports = router;
