const express = require('express');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  console.log("this is req params:", req.params);
  DroneModel.find()
    .then((dbRes) => {
      // console.log(dbRes);
      res.render("drones/list.hbs", { drones: dbRes });
    })
    .catch((error) => {
      console.log(error);
    });
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
