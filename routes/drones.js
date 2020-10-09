const express = require("express");

// require the Drone model here
const DroneModel = require("../models/Drone.model");

const router = express.Router();

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((drone) => {
      res.render("drones/list.hbs", { drone });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  DroneModel.create(req.body)
    .then((data) => {
      console.log(data);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id;
  DroneModel.findById(id)
    .then((data) => {
      res.render("drones/update-form.hbs", { data });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id;
  DroneModel.findByIdAndUpdate(id, { $set: req.body })
    .then(() => {
      console.log("Updated");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  let id = req.params.id;
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      console.log(" deleted");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
