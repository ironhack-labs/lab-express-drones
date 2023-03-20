const express = require("express");
const router = express.Router();
const path = require("path");
const Drone = require("../models/Drone.model");
// const Drone = require(path.join(__dirname, "..", "models", "Drone.model.js"));

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFronDB) => {
      const data = {
        drones: dronesFronDB,
      };
      res.render("drones/list", data);
    })
    .catch((e) => {
      console.error(e);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  console.log(req.body);
  const data = req.body;
  Drone.create(data)
    .then((newDrone) => {
      res.redirect("/drones");
    })
    .catch((err) => console.error(err));
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((data) => {
      res.render("drones/update-form", { drone: data });
    })
    .catch((err) => console.error(err));
});

router.post("/drones/:id/edit", (req, res, next) => {
  console.log(req.params);
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedDrone) => {
      res.redirect(`/drones`);
    })
    .catch((e) => console.error(e));
});

router.post("/drones/:id/delete", (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then(res.redirect("/drones"))
    .catch((err) => error.log(err));
});

module.exports = router;
