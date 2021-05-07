const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model.js"); //link with the model I created in ./../models/Drone.models.js use tab to have the correct path


const router = express.Router();

router.get("/", (req, res, next) => res.render("index"));

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  // i want drones pages with drones data
  DroneModel.find()
    .then((dbResult) => {
      res.render("drones/list.hbs", { drones: dbResult });
    })
    .then(() => {
      console.log("so far so goog");
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
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
