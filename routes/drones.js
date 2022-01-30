const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then((drone) => {
    res.render("drones/list", {
      drone, 
    })
    /*  .catch((e) => next(e)); */
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
 res.render("drones/create-form")
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(droneFromForm => console.log(`New drone created: ${droneFromForm.name}`))
  .then(() =>
  res.redirect('/drones'))
  .catch(error => console.log(`Something went wrong:`, error));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
