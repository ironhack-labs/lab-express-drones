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
    .then(() => res.redirect(`/drones`))
    .catch((error) => next(error));
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  const { droneId } = req.params;

  Drone.findById(droneId)
    .then((droneToEdit) => {
       console.log(droneToEdit);
      res.render("drones/update-form.hbs", { drone: droneToEdit }); // <-- add this line
    })
    .catch((error) => next(error));
});

router.post('/drones/:droneId/edit', (req, res, next) => {
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(
    droneId,
    { name, propellers, maxSpeed },
    { new: true }
  )
    .then(() => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch((error) => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
