const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
      .then(dronesFromDB => {
        console.log("The user is watching the list of drones.");
        res.render("drones/list", dronesFromDB);
      })
      .catch(err => console.log("Error finding the drones in the database: ", err));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let err = "hidden";
  if(req.query.error==="true"){
    err = "";
  }
  res.render("drones/create-form", { error: err } );
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({name, propellers, maxSpeed})
      .then(resDroneCreated => {
        console.log("User introduced a new Drone.", resDroneCreated);
        res.redirect("./");
      })
      .catch(err => {
        console.log("Error while creating a new drone: ", err);
        res.redirect("./create?error=true");
      });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  let err = "hidden";
  if(req.query.error==="true"){
    err = "";
  }
  Drone.findById(req.params.id)
      .then(droneFromDB => res.render("drones/update-form", { error: err, drone: droneFromDB } ))
      .catch(err => console.log(`Error finding the drone with id ${req.params.id} in the database: `, err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(req.params.id, { propellers , maxSpeed })
      .then(resDroneUpdated => {
        console.log("User updated a new Drone.", resDroneUpdated);
        res.redirect("/drones");
      })
      .catch(err => {
        console.log("Error while creating a new drone: ", err);
        res.redirect(`./${req.params.id}/edit?error=true`);
      });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
