const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => res.render("drones/list", { drones }))
    .catch((error) => {
      console.error("error when getting drones data", error);
      next(error);
    });
});

router.get("/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.error("error when creating drone data", error);
      next(error);
    });
});

router.get("/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", drone);
    })
    .catch((error) => {
      console.error("error when getting drone", error);
      next(error);
    });
});

router.post("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.error("error when updating drone data", error);
      next(error);
    });
});

router.get("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((e) => {
      console.error("Error deleting the drone from the DB: ", e);
      next(error);
    });
});

module.exports = router;
