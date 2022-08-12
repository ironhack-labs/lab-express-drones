const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFromDB) => {
      res.render("drones/list", { dronesFromDB });
    })
    .catch((err) =>
      console.log(`An error occurred while getting books from the DB: ${err}`)
    );
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) =>
      console.log(
        `An error occurred while creating the Drone in the DB: ${err}`
      )
    );
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(id)
    .then((droneToBeUpdated) => {
      res.render("drones/update-form", { droneToBeUpdated });
      console.log(droneToBeUpdated);
    })
    .catch((err) =>
      console.log(`An error occurred while finding the Drone in the DB: ${err}`)
    );
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  // console.log({ id, name, propellers, maxSpeed });
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect("/drones"))
    .catch((err) =>
      console.log(
        `An error occurred while trying to update the Drone in the DB: ${err}`
      )
    );
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((err) =>
      console.log(
        `An error occurred while trying to update the Drone in the DB: ${err}`
      )
    );
});

module.exports = router;
