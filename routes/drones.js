const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here

  Drone.find()
      .then( (dronesFromDB) => {

          const data = {
              drones: dronesFromDB
          }

          res.render("drones/list", data);
      })
      .catch( e => {
          console.log("error getting list of drones from DB", e);
          next(e);
      });
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
    res.render("drones/create-form");
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
};


Drone.create(newDrone)
    .then( (newDrone) => {
        res.redirect("/drones");
    })
    .catch( e => {
        console.log("error creating a new drone", e);
        next(e);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
   
  Drone.findById(id)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs', { drone: droneToEdit });
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect(`/drones`))
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
   
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
