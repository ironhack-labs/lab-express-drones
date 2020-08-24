const express = require('express');
const Drones = require("../models/Drone.model");


const router = express.Router();

router.get('/drones', (req, res) => {
  Drones.find()
    .then(allTheDronesFromDB => {
      console.log(`Retrieved drones from DB:`, allTheDronesFromDB);
      res.render("../views/drones/list.hbs", {drones: allTheDronesFromDB});
    })
    .catch(error => console.log("Error while getting the drones from the DB: ", error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
