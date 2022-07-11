const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here


  Drone.find()
    .then((dronesFromDB) => {
      console.log("Query to DB worked...", dronesFromDB.length)

      const data = {
        dronesArr: dronesFromDB
      };

      res.render("drones/list", data);
    })
    .catch((error) => {
      console.log("Error getting data from DB", error)
      next(error);
    })

});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.create(droneDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((error) => {
      console.log("Error creating drone in the DB", error);
      next(error);
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  Drone.findById(id)
    .then((droneDetails) => {
      res.render("drones/update-form", droneDetails);
    })
    .catch((error) => {
      console.log("Error getting drone details from DB", error);
      next(error);
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
  .then(() => {
    res.redirect("/drones");
  })
  .catch((error) => {
    console.log("Error updating drone in the DB", error);
    next(error);
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;

  Drone.findByIdAndRemove(id)
    .then( () => {
      res.redirect('/drones');
    })
    .catch( (error) => {
      console.log("Error deleting drones from DB", error);
      next(error);
    })
});

module.exports = router;
