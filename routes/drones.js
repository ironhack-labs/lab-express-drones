const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((allDrones) => {
      console.log("Retrieved drones from DB", allDrones);
      res.render("drones/list.hbs", { drones: allDrones });
    })
    .catch((error) => {
      console.log("Error while getting the drones from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
   
    .then(() =>  res.redirect("/drones"))
    .catch(() => res.render("drones/create-form"));
  });


router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  Drone.findById(id)
    .then((droneToEdit) => {
      // console.log(droneToEdit);
      res.render("drones/update-form.hbs", { drone: droneToEdit });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updateDrone) => res.redirect(`/drones/${updateDrone.id}`))
    .catch(() => res.render("drones/update-form"));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect("/drones"))
  .catch((error) => next(error));
});

module.exports = router;
