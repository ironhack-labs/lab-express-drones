const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find().then((results) => {
    res.render("drones/list", { results });
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let { name, propellers, maxSpeed } = req.body;
  Drone.create(req.body)
    .then((results) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("something went wrong adding to the db", err);
      res.render("drones/create-form");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id).then((results) => {
    res.render("drones/update-form", { results });
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((results) => {
      console.log("successfully update drone: ", req.params.id);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("something went wrong when updating the drone: ", err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndDelete(req.params.id).then((results) => {
    console.log("drone deleted");
    res.redirect("/drones");
  });
});

module.exports = router;
