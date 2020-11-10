const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model");

 // Iteration #2: List the drones
router.get('/drones', (req, res) => {
  Drone.find({})
    .then((allTheDronesFromDB) =>
      res.render("drones/list", { allTheDronesFromDB })
    )
    .catch((error) => `Error while fetching all books: ${error}`);
});

// Iteration #3: Add a new drone
// Create a new drone to add to the db
router.get("/drones/create", (req, res, next) => res.render("drones-create"));

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drones.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => `Error while creating a drones: ${error}`);
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((droneToEdit) => res.render("drones-edit", droneToEdit))
    .catch((error) =>
      console.log("Error while updating drone details: ", error)
    );
});

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Book.findByIdAndUpdate(
    id,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then(() => res.redirect(`/drones/${id}`))
    .catch((error) =>
      console.log(`Error while updating a single drones: ${error}`)
    );
});

// Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
