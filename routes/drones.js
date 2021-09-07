const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drones) => {
      // console.log("Estos son los drones:", drones);

      res.render("drones/list", { drones });
    })
    .catch((err) => {
      console.log("Error while getting drones from the DB: ", err);
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
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((droneFromDB) => {
      console.log(`New drone created: ${droneFromDB.name}.`);
      res.redirect("/drones");
    })
    .catch((error) => res.redirect("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId = req.params.id;

  Drone.findById(droneId)
    .then((droneToEdit) => {
      res.render("drones/update-form", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect("/drones")) //vuelve a la página para ver los updates
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((err) => next(err));
});

module.exports = router;
