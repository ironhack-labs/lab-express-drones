const express = require('express');
// require the Drone model here

const router = express.Router();
const DroneModel = require('../models/Drone.model')

//display drones/list on localhost:3000/drones
router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
// Iteration #2: List the drones
//require DroneModel
  DroneModel.find()
    .then(allTheDronesFromDB => {
      console.log(allTheDronesFromDB)
      res.render('drones/list',{drones: allTheDronesFromDB})
    })
    .catch(err=> {
      console.log(`Err While getting the Drones from the DB: ${err}`)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.create({name, propellers, maxSpeed})
  .then(() => res.redirect('/drones'))
  .catch(error => 
    res.redirect('/drones') 
    `Error while creating a new drone: ${error}`);
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});
  const { id } = req.params;
  DroneModel.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs', droneToEdit)    
    })
    .catch(error =>
      console.log(`Error while getting a single drone for edit: ${error}`)
    );});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed} = req.body;

  DroneModel.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed},
    {new: true}
  )
    .then(() => res.redirect('/drones'))
    .catch(error => 
      res.redirect('/drones/:id/edit') 
      `Error while editing a new drone: ${error}`);
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
  .then(() => res.redirect('/drones'))
  .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;