const express = require("express");

// require the Drone model here
const droneModel = require("./../models/Drone.model.js");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  droneModel
    .find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list", { drones });
    })
    .catch(next);
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  droneModel
    .create(req.body)
    .then(() => res.redirect("/drones"))
    .catch((dbErr) => res.send(JSON.stringify(cbErr)));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
