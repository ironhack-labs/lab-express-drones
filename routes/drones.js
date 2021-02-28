const express = require("express");
const router = express.Router();
const DroneModel = require("./../models/DroneModel");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones) => res.render("drones/list", drones))
    .catch((err) => console.log(err), next);
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("/drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then((createDrone) => {
      console.log("New drone is created", createDrone);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone) => {
      console.log("drones update");
      res.render("/drones/update-form", drone);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => {
      res.redirect("/drone", drone);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
DroneModel.findByIdAndDelete(req.params.id)
.then((drone)=>{
  res.redirect("/drones", drone)
})
.catch((err)=>{console.log(err)})
});

module.exports = router;
