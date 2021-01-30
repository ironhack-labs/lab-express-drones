const express = require('express');

const Drones = require('../models/Drone.model.js')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then(allDrones => {
    res.render('drones/list.hbs', { dronesList: allDrones })
  })
  .catch(error => console.log(error));
});


 // Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => res.render('drones/create-form.hbs'));
 

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drones.create({ name, propellers, maxSpeed })
    .then(dronesFromDB => {
      console.log(`New DRONE created: ${dronesFromDB.name}.`)
      res.redirect('/drones/')
    })
    .catch(error => `Error while creating a new book: ${error}`);
});


// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
   const { id } = req.params;
  Drones.findById(id)
  .then(droneToEdit => {
    res.render('drones/update-form.hbs', droneToEdit);
  })
  .catch(error => console.log(`Error while getting a single drone for edit: ${error}`));
});


router.post('/drones/:id/edit', (req, res, next) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
   
    Drones.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
      .then(updatedDrone => res.redirect('/drones'))
      .catch(error => console.log(`Error while updating a single drone: ${error}`));
  });



// Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
    const { id } = req.params;
    
    Drones.findByIdAndDelete(id)
    .then(deletedDrone => res.redirect('/drones'))
    .catch(error => consle.log(`error while deleting: ${error}`));
});

module.exports = router;
