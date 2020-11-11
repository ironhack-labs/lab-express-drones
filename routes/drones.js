const express = require('express');

// require the Drone model here
const Drone = require("../models/Drone.model")
const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDronesFromDB) => {
      res.render("../views/drones/list", {allDronesFromDB})
    }) 
    .catch((error) => `Error while fetching all the drones from the DataBase: ${error}`);
});

router.get('/drones/create', (req, res, next) => res.render("drones/create-form")
  // Iteration #3: Add a new drone
);

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;

  Drone.create({name, propellers, maxSpeed})
    .then(() => res.redirect("/drones")
    .catch((error) => `Error while creating the drones: ${error}`))
});



router.get('/drones/:id/edit', (req, res) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((droneToEdit) => {
      res.render("drones/update-form", droneToEdit);
    })
    .catch((error) => `Error while getting a single drone for edit: ${error}`);
  });

router.post('/drones/:id/edit', (req, res) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const {name, propellers, maxSpeed} = req.body;

  Drone.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then(() =>
      res.redirect("/drones"))
    .catch((error) => console.log( `Error while updating a drone: ${error}`)
    );
  });

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
  .then(() => res.redirect("/drones")
  .catch((error) => console.log(`Error while deleting a drone: ${error}`))
  )
});

module.exports = router;
