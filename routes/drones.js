const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      const data = {
        drones: dronesFromDB,
      };
      res.render("drones/list", data);
    })
    .catch((err) => {
      console.log("Error getting drones from DB", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const droneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(droneDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/drones/create");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((droneDetails) => {
      res.render("drones/update-form", droneDetails);
    })
    .catch((err) => {
      console.log("Error getting drone from DB", err);
      next(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const newDroneDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.findByIdAndUpdate(id, newDroneDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Error updating drone in DB", err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Error deleting drone from DB", err);
    });
});

module.exports = router;