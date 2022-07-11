const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((dronesFromDB) => {
    const data = {dronesFromDB};
    console.log(data)
    res.render('drones/list', data);
  })
  .catch((error) => {
    console.log("Error in retrieving information from the DB", error);
    next(error)
  })
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propeller,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(droneDetails)
    .then(() => {
      res.redirect("/drones")
    })
    .catch((error) => {
      console.log("Error creating book in the DB", error);
      next(error);
    })  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  Drone.findById(id)
  .then((droneDetails) => {
    res.render("drones/update-form", droneDetails)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const id = req.params.id;
  const update = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Book.findByIdAndUpdate(id, update)
  .then(() => {
    res.redirect("drones")
  })
  .catch((error) => {
    console.log("Error getting book details from DB", error);
    next(error);
  })

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
