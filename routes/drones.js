const express = require("express");

// require the Drone model here
const Drone = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allTheDronesFromDB) => {
      console.log(allTheDronesFromDB);
      res.render("drones/list.hbs", { drones: allTheDronesFromDB });
    })
    .catch((err) =>
      console.log(`Err while getting the books from the  DB: ${err}`)
    );
  // ... your code here
});

router.get("/drones/create", (req, res) => res.render("drones/create-form"));
// Iteration #3: Add a new drone
// ... your code here

router.post("/drones/create", (req, res) => {
  // console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => `Error while creating a new book: ${error}`);
});
// Iteration #3: Add a new drone
// ... your code here

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findById(id)
    .then((droneToEdit) => {
      // console.log(bookToEdit);
      res.render("drones/update-form", droneToEdit);
    })
    .catch((error) =>
      console.log(`Error while getting a single book for edit: ${error}`)
    );
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then((updatedDrone) => res.redirect(`/drones`))
    .catch((error) =>
      console.log(`Error while updating a single book: ${error}`)
    );
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect(`/drones`))
    .catch((error) => console.log(`Error while deleting a drone: ${error}`));
});

module.exports = router;
