const express = require("express");
const DroneModel = require("../models/Drone.model");
// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((droneList) => {
      res.render("drones/list.hbs", { drones: droneList });
    })
    .catch(next);
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  DroneModel.create(req.body)
    .then(() => res.redirect("/drones"))
    .catch((err) => res.redirect("/drones/create"));
});

router.get("/drones/:id/edit", (req, res, next) => {
  DroneModel.findById(req.params.id)
    .then((result) => res.render("drones/update-form", { drone: result }))
    .catch(() => res.redirect("drone/update-form"));
});

router.post("/drones/:id/edit", (req, res, next) => {
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/drones"))
    .catch(() => res.redirect("/drones/update-form"));
});

//console.log("hey");
//works with router.get but 404 with router.post
router.get("/drones/:id/delete", (req, res, next) => {
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch(next);
});

module.exports = router;
