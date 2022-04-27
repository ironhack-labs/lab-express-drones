const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model")

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
  .then(drones=>{
    res.render("drones/list",{drones})
  })
  .catch(error=>console.log(error))
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body)
  Drone.create(req.body)
  .then(drone=>console.log("Se Logró"))
  .catch(error=> console.log(error,"No se pudo"))
  res.redirect("/drones")
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const {id}= req.params
  Drone.findById(id)
  .then(drone=>{
  console.log(drone)
  res.render("drones/update-form",{drone})
  })
  .catch(error=>console.log(error))
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params

  Drone.findByIdAndUpdate(id,req.body)
  .then(datos=>{
    console.log(datos)
    res.redirect("/drones")
  })
  .catch(error=> console.log(error))
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  console.log(req.params.id)
  Drone.findByIdAndDelete(req.params.id)
  .then(DroneEliminado=>{
    console.log(DroneEliminado)
    res.redirect("/drones")
  })
  .catch(error=>console.log(error))
});

module.exports = router;