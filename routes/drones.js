const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js"); // <== add this line before your routes


router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((allTheDronesFromDatabase) => {
    // -> allTheDronesFromDatabase is a placeholder, it can be any word
    console.log("Retrieved drones from DB:", allTheDronesFromDatabase);

    // we call the render method after we obtain the drones data from the database -> allTheDronesFromDatabase
    res.render("drones/list.hbs", { drones: allTheDronesFromDatabase }); // pass `allTheDronesFromDatabase` to the view (as a variable drones to be used in the HBS)
  })
  .catch((error) => {
    console.log("Error while getting the drones from the DB: ", error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', (req, res, next) => {
  // console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then((droneFromDB) => console.log(`New drone created: ${droneFromDB.name}.`))
    .catch((error) => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
