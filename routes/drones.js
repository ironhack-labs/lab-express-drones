const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => res.render("drones/list", { dronesFromDB }))
    .catch((err) => console.log("an error happened", err));
  // Iteration #2: List the drones
  // ... your code here
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then(() => {
      console.log("c est faiiiit");
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("oops", err);
      res.render("create-form");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => res.render("drones/update-form", drone))
    .catch((err) => console.log("ooops", err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("oops", err);
    });
});

module.exports = router;
