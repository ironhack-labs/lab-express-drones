const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(allTheDronesFromDB => {res.render('drones/list', { drones: allTheDronesFromDB})})
  .catch(error => console.log('Error while getting the books from the DB: ', error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // console.log(req.body);
  const { name, propellers, maxSpeed} = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => `Error while creating a new drone: ${error}`);
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const { id } = req.params;
   
    Drone.findById(id)
      .then(dronesToEdit => {
        // console.log(dronesToEdit);
        res.render('drones/update-form', dronesToEdit); // <-- add this line
      })
      .catch(error => console.log(`Error while getting a single drone for edit: ${error}`));
  }
);

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.redirect(`/drones`))
    .catch(error => console.log(`Error while updating a single book: ${error}`));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
