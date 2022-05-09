const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones

  Drone.find()
    .then((drones) => {
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => next(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    // .then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params;

  Drone.findById(id)
    .then((drones) => {
      console.log(drones);
      res.render(`drones/update-form`, drones ); // <-- add this line
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone

  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drones) => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone

  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

// GET route to retrieve and display all the books
// ... no changes here

// GET route to retrieve and display details of a specific book
// ... no changes here

module.exports = router;
