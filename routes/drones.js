const express = require("express");

// require the Drone model here
const Drone = require("../models/Drone.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDronesFromDB) => {
      res.render("drones/list", { drones: allDronesFromDB }); 
    })
    .catch((err) =>
      console.log(`Err while getting the drones from the DB: ${err}`)
    );
});

router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const{ name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
  .then(()=> res.redirect("/drones"))
  .catch((error) =>
      console.log(`Err while creating the new drone: ${error}`)
    )
});

router.get("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  Drone.findById(id)
  .then(droneToEdit =>{
    res.render("drones/update-form", droneToEdit)
  })
  .catch(error => console.log(`Error while getting a single drone for edit: ${error}`))
});

router.post("/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    id, { name, propellers, maxSpeed },
    {new: true}
  )
  .then(updatedDrone => res.redirect(`/drones`))
  .catch(error => (`Error while updating a single drone: ${error}`))
});

router.post("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
  .then(()=> res.redirect(`/drones`))
  .catch(error => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
