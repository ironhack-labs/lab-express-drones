const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log("Retrieved movies from DB:", allTheDronesFromDB);

      res.render("drones/list.hbs", { drones: allTheDronesFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the drones from the DB: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })

    .then((droneFromDB) =>
      // console.log(`New drone created: ${droneFromDB.name}.`)
      res.redirect("/drones")
    )
    .catch((error) => next(error), res.redirect("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const droneId = req.params.id;
  Drone.findById(droneId).then((droneInfo) => {
    console.log("Info to modify:", droneInfo);
    res.render("drones/update-form", { droneInfo });
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const droneId = req.params;
  const { name, propellers, maxSpeed } = req.body;
  console.log(req.params);
  console.log(droneId);

  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )

    .then(
      () => console.log(`New drone edited: ${droneId.name}.`),
      res.redirect("/drones")
    )
    .catch((error) => next(error), res.redirect("/drones/:droneId/edit"));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
