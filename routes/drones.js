const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((dronesFromDB) => {
      console.log(dronesFromDB);
      res.render("drones/list", { drones: dronesFromDB });
    })
    .catch((e) => {
      console.log("error", e);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((droneFromDB) =>
      console.log(`New drone created: ${droneFromDB.name}.`)
    )
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;

  Drone.findById(id)
    .then((droneToEdit) => {
      console.log(droneToEdit);
      res.render("drones/update-form", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  const { name, propellers, maxSpeed } = req.body;
 
  Drone.findByIdAndUpdate(id, {  name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect('/drones')) 
    .catch(error => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const id = req.params.id;
  Drone.findByIdAndRemove(id)
  .then(() => res.redirect('/drones'))
  .catch(error => next(error))
});

module.exports = router;
