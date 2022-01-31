const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then(responseFromDB => {
    console.log(responseFromDB);
    res.render('drones/list.hbs', { drones: responseFromDB});
  })
  .catch(error => {
    console.log('Error while retrieving drones list from db: ', error);

    next(error);
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  /*const { droneId } = req.params.id; //why do I need the .id bit here when I didn't for books? Gets a cast to object failed for value error */ 
  
  Drone.findById(req.params.id)
  .then(responseFromDB => {
    res.render('drones/update-form.hbs', { drone: responseFromDB});
  })
  .catch(error => next(error));  
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //const { droneId } = req.params.id; //this method will not work either using params or id
  //console.log(droneId); // returns undefined
  const {name, propellers, maxSpeed} = req.body;
  
  Drone.findByIdAndUpdate(req.params.id, {name, propellers, maxSpeed}, {new: true})
    .then(updatedDrone => res.redirect("/drones"))
    .catch(error => res.render(`/drones/${req.params.id}/edit`));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndRemove(req.params.id)
  .then(() => res.redirect("/drones"))
  .catch(error => next(error));
});

module.exports = router;
