const express = require("express")
const router = express.Router()

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((allDronesfromDB) => {
      res.render("drones/list.hbs", {
        allDronesfromDB,
      })
    })
    .catch((err) =>
      console.log(
        "An error occurred while getting all the drones from DB: ",
        err
      )
    )
})

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
})

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body

  Drone.create({ name, propellers, maxSpeed })
    .then((newSavedDroneFromDB) => {
      res.redirect("/drones")
    })
    .catch((err) => {
      console.log("Error while saving a new drone in the DB: ", err)
      res.render("drones/create-form.hbs")
    })
})

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((droneToUpdate) => {
      res.render("drones/update-form.hbs", droneToUpdate)
    })
    .catch((err) =>
      console.log("Error while getting a drone to be edited from the DB: ", err)
    )
})

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body

  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedDroneFromDB) => {
      res.redirect("/drones")
    })
    .catch((err) => {
      console.log(
        "Error while saving the updates of the drone in the DB: ",
        err
      )
      res.render("/drones/update-form.hbs")
    })
})

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone

  Drone.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/drones"))
    .catch((err) => {
      console.log("Error while removing a drone from the DB: ", err)
      res.redirect("/drones")
    })
})

module.exports = router
