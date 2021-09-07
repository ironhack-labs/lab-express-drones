const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDronesFromDB) => {
      console.log("Retrieved drones from DB:", allDronesFromDB);
      res.render("drones/list", { drone: allDronesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the drone from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/drones/create", (req, res, next) =>
  res.render("drones/create-form.hbs")
);

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then((drone) => {
      console.log(`New drone added to DB named ${drone.name}.`);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;

  Drone.findById(droneId)
    .then((droneToEdit) => {
      res.render("drones/update-form", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const droneToModId = req.params.id;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    droneToModId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then((modDrone) => {
      console.log(`Drone ${modDrone.name}  modified`);
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/drones/:id/edit");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
