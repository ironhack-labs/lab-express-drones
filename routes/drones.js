const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((allTheDronesFromDB) => {
    console.log("here are the drones: ", allTheDronesFromDB);

    res.render("drones/list.hbs", { allTheDronesFromDB });
  })
  .catch((err) => console.log(`Error while getting all the drones: ${err}`));
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    Drone.find()
      .then((droneFromDb) => res.render("drones/create-form.hbs", { droneFromDb }))
      .catch((err) => console.log(`Error while displaying the form to create a new drone: ${err}`));
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // console.log("user input: ", req.body);

  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed})
    .then((droneFromDB) => {
      console.log("new drone here: ", droneFromDB);
      res.redirect("/drones");
    })
    .catch((err) => console.log(`Error while saving the drone in DB: ${err}`));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    // .populate("author")
    .then((foundDrone) => {
      console.log("found drone: ", foundDrone);

        res.render("drones/update-form.hbs", { foundDrone });
      })
    .catch((err) => console.log(`Error while getting the drone from DB for editing: ${err}`));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed}, { new: true })
    .then((updatedDrone) => {
      // console.log("updated:", updatedDrone);

      res.redirect(`/drones`);
    })
    .catch((err) => console.log(`Error while saving the updates on a specific drone: ${err}`));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndRemove(req.params.id)
  .then(() => res.redirect("/drones"))
  .catch((err) => console.log(`Error while deleting the drone from DB: ${err}`));
});

module.exports = router;
