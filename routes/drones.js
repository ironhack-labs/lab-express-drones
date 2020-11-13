const express = require('express');

// require the Drone model here

const router = express.Router();
const Drone = require("../models/drone.model");

router.get('/drones', (req, res, next) => {
  Drone.find({})
    .then((allTheDronesFromDB) =>
      res.render("drones/list", { allTheDronesFromDB })
    )
    .catch((error) => `Error while fetching all drones: ${error}`);
});

router.get('/drones/create', (req, res) => res.render ("drones/create-form"));
router.post('/drones/create', (req, res) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
  .then(() => res.redirect("/drones"))
  .catch((error) => `Error while creating a new drone: ${error}`);
});

router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Drone.findById( id )
    .then((droneToEdit) => {
      res.render("drones/update-form", droneToEdit);
    })
    .catch((error) => `Error while getting a drone for edit: ${error}`);
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed },
    { new: true } 
  )
    .then((updatedDrone) => res.redirect(`/${updatedDrone._id}`))
    .catch((error) =>
      console.log(`Error while updating a single drone: ${error}`)
    );
});

router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete( id )
  .then(() => res.redirect("/drones"))
  .catch(error => `Error occured while deleting drones: ${error}`)
});

module.exports = router;
