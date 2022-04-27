const express = require("express");
const { process_params } = require("express/lib/router");
const router = express.Router();
const droneModel = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  droneModel.find()
    .then((allDrones) => {
      res.render("drones/list", { data: allDrones });
    })
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form")
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  droneModel.create(req.body)
    .then(newDrone => {
      console.log("Drone que se creó",newDrone)
      res.redirect("/drones")
    })

    .catch(error => {
      console.log(error)
      res.render("drones/create-form")
    })
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params

  droneModel.findById(id)
    .then(droneFound => {
      console.log("Drone a actualizar", droneFound)
      res.render("drones/update-form.hbs", {drone: droneFound })
    })
    .catch((err) => console.log(err))
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params

  droneModel.findByIdAndUpdate(id, req.body, {new : true})
    .then(droneUpdate => {
      
      res.redirect("/drones")
    })
    .catch(error => {
      console.log(error)
      res.render("drones/update-form.hbs")
    })

});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params
  droneModel.findByIdAndDelete(id)
  .then(droneDeleted => {
    console.log("Drone que se borró", droneDeleted)
    res.redirect("/drones")
  })
  .catch((err) => console.log(err))
});

module.exports = router;