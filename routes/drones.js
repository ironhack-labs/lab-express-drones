const express = require('express');

// require the Drone model here

const router = express.Router();
const DroneModel = require("../models/DroneModel");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then((drones) => res.render("drones/list", {drones}))
  .catch((error) => console.log(error), next);
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
res.render("/drones/create-form");

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  DroneModel.create(req.body)
    .then((createDrone) => {
      console.log("New drone is created", createDrone);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findById(req.params.id)
    .then((drone) => {
      console.log("drones update");
      res.render("/drones/update-form", {drone}); //drone=param / param est cherché par id
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  DroneModel.findByIdAndUpdate(req.params.id, req.body) //find by id : se rapporte à params ds update / req.body = print
    .then((drone) => {
      res.redirect("/drone", {drone});
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
