const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then(dronesFromDB => {
      console.log(dronesFromDB)

      const data = {
        dronesArr: dronesFromDB
      };

      res.render('drones/list', data);
    })
    .catch((error) => console.log(error));
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newModel = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  Drone.create(newModel)
    .then(() => {
      res.redirect("/drones")
    })
    .catch((error) => {
      console.log("Error creating new dron in the DB", error)
      next(error)
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params.id
  DroneModel.findById(id)
    .then((newModel) => {
      res.render('drones/update-form', newModel)
    })
    .catch((error) => {
      console.log("Error creating new dron model in the DB", error)
      next(error)
    })
})

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params.id
  const newModel = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }
  Drone.findByIdAndUpdate(id, newModel)
    .then(() => {
      res.redirect("/drones")
    })
    .catch((error) => {
      console.log("Error creating new dron in the DB", error)
      next(error)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params.id
  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => {
      console.log("Error deleting drone", error)
    })
});

module.exports = router;
