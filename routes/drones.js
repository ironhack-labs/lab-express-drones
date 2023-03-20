const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesArr) => {
      console.log(dronesArr);

      const data = {
        data: dronesArr,
      };
      res.render("drones/list", data);
    })
    .catch((error) => {
      console.log("error display drones list", error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones", (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.proppelers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.create(droneDetails)
    .then(() => {
      console.log(droneDetails);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("error creating new drone", error);
      next(error);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { droneId } = req.params;

  Drone.findById(droneId)
    .then((droneToEdit) => {
      console.log("droneToEdit", droneToEdit);

      res.render("drones/update-form.hbs", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Book.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => res.redirect(`/drones/${updatedDrone.id}`))
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { droneId } = req.params;
  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;
