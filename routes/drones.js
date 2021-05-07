const express = require('express');

const DroneModel = require("./../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list", { title: "Drones", drones: dbResult });
    })
    .then((dbErr) => {
      console.log(dbErr);
      next(dbErr);
    });
});

router.get('/drones/create', function (req, res, next) {
  
});


router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
