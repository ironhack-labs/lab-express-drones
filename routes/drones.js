const express = require("express");
const Drone = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((data) => {
      console.log(data);
      res.render("drones/list", { drones: data });
    })

    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.find()
    .then((data) => {
      console.log("A new Drone has been created: ", data);
      res.render("drones/create-form", { drones: data });
    })

    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create(req.body)
    .then((drone) => {
      res.render("drones/success", drone);
    })
    .catch((error) => {
      console.log("Error", error);
      next();
    });
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
