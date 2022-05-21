const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((registeredDrones) => {
      res.render("drones/list", { data: registeredDrones });
    })
    .catch(console.log);
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create(req.body)
    .then(() => {
      res.redirect("/drones");
    })
    .then(console.log);
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", { drone: drone });
    })
    .catch(console.log);
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(`${req.params.id}`, req.body)
    .then(res.redirect("/drones"))
    .catch(console.log);
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(`${req.params.id}`)
    .then(res.redirect("/drones"))
    .catch(console.log);
});

module.exports = router;
