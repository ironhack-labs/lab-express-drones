const express = require("express");

// require the Drone model here
const DroneModel = require("./../models/Drone.model");
const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => res.render("drones/list", { drones }))
    .catch((err) => console.log(err), next);
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // const { name, propellers, maxSpeed } = req.body;
  // { name, propellers, maxSpeed }
  DroneModel.create(req.body)
  .then(newDrone=> {
    console.log("new drone was created: ",newDrone);
    res.redirect("/drones")
  })
  .catch(err=> {
    res.render("drones/create-form");
    console.log(err)}) 
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
  .then(drone =>
    res.render("drones/update-form", {drone}))
  .catch(err=> console.log("couldn't find the drone: ", err))
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(drone=> {
    res.redirect("/drones");
    console.log("drone updated!", drone)
  })
  .catch(err=> {
    res.render("drones/update-form", {drone})
    console.log("error updating drone: ",err)})
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
  .then(success=> {
    console.log("drone exterminated!");
    res.redirect("/drones")})
  .catch(err=>console.log("extermination failed", err))
});

module.exports = router;
