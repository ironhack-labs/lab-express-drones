const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  const drones = Drone.find()
    .then(dronesFromDB => {
      const data = { data: dronesFromDB }
      console.log("drones retrieved from DB: " + data);
      res.render("drones/list", data)
    })
    .catch(error => {
      console.log("error while retrieving all dones: " + error);
      next(error)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  const data = { name, propellers, maxSpeed }
  Drone.create(data)
    .then(() => {
      console.log("new drone created");
      res.redirect("/drones")
    })
    .catch(error => {
      console.log("error while creating a new drone: " + error);
      res.redirect("/drones/create")
    })
  });
  
  router.get('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const {id} = req.params
    Drone.findById(id)
    .then(droneDetails => {
      res.render("drones/update-form", droneDetails)      
    })
    .catch(error => {
      console.log("error while linking to update page: " + error)
      next(error)
    })

});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name, propellers, maxSpeed} = req.body
  const editedData = {name, propellers, maxSpeed}
  console.log(editedData);
  Drone.findByIdAndUpdate(id, editedData)
    .then(() => {
      console.log("data successfully updated")
      res.redirect("/drones")
    })
    .catch(error => {
      console.log("An error occurred while updating data: " + error);
      res.redirect(`/drones/${id}/edit`)
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drone.findByIdAndDelete(id)
    .then(() => {
      console.log("successfully deleted");
      res.redirect("/drones")
    })
    .catch((error) => {
      console.log("An error occurred while deleting: " + error);
      res.redirect("/drones")
    })
});

module.exports = router;
