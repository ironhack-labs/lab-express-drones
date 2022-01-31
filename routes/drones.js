const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((droneList) => res.render("../views/drones/list.hbs", { droneList }))
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  res.render("../views/drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((droneCreated) => {
      console.log(`new drone created: ${droneCreated}`);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(
        `An error occurred while creating drones from the DB: ${err}`
      );
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("../views/drones/update-form.hbs", {
        drone,
      });
    })
    .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((drone) => {
      console.log(`drone edited: ${drone}`);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(
        `An error occurred while creating drones from the DB: ${err}`
      );
      res.redirect(`/drones/${req.params.id}/edit`);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndDelete(req.params.id)
    .then((deletedDrone) => {
      console.log(`drone deleted: ${deletedDrone}`);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(
        `An error occurred while creating drones from the DB: ${err}`
      );
      res.redirect("/drones");
    });
});

module.exports = router;
