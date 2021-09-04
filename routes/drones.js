const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((allDrones) => {
      res.render("./drones/list", { allDrones });
    })
    .catch((err) => {
      console.log("not a drone here!");
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("./drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  console.log({ name, propellers, maxSpeed });
  console.log(req.body);
  Drone.create({
    name,
    propellers,
    maxSpeed,
  })
    .then((response) => res.redirect("/drones"))
    .catch(() => console.log("infos not transmitted"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
      res.render("./drones/update-form", { drone });
    })
    .catch((err) => console.log("whoopsie!"));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, {
    name,
    propellers,
    maxSpeed,
  })
    .then((response) => res.redirect("/drones"))
    .catch(() => console.log("infos not transmitted"));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndRemove(id)
    .then((result) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("oh noooooo");
    });
});

module.exports = router;
