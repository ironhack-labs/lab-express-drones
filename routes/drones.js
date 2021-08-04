const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find().then((result) => {
    console.log("results", result);
    res.render("./drones/list.hbs", { listOfDrones: result });
    // res.send(result)
  });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("./drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  Drone.create({ name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed }).then(() => {
    res.redirect("/drones");
  });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id).then(oneDrone => {
    res.render("./drones/update-form.hbs", { oneDrone: oneDrone });
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.body);
  Drone.findByIdAndUpdate(req.params.id, { name: req.body.name, propellers: req.body.propellers, maxSpeed: req.body.maxSpeed }).then(() => {
    res.redirect("/drones");
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findOneAndDelete(req.params.id).then(() => {
    res.redirect("/drones");
  });
});

module.exports = router;
