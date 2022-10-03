const express = require("express");
const router = express.Router();

const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((dronesFromDB) => {
      res.render("drones/list", { drones: dronesFromDB });
    })
    .catch((err) => console.log(err));
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

  DroneModel.create(droneDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("error creating a new dron in DB", err);
      next();
    });
});

router.get("/drones/:droneId/edit", (req, res, next) => {
  const droneId = req.params.droneId;
  const errorMessage = req.query.err ? req.query.err : "";

  DroneModel.findById(droneId)
    .then((droneFromDB) => {
      const data = {
        drone: droneFromDB,
        error: errorMessage,
      };
      res.render("drones/update-form", data);
    })
    .catch((err) => {
      console.log("Error getting drone details from DB...", err);
      next();
    });
});

router.post("/drones/:droneId/edit", (req, res, next) => {
  const droneId = req.params.droneId;

  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  DroneModel.findByIdAndUpdate(droneId, newDetails)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Error updating the drone...", err);
      res.redirect(`/drones/${droneId}/edit`);
      next();
    });
});

router.post("/drones/:droneId/delete", (req, res, next) => {
  const droneId = req.params.droneId;

  DroneModel.findByIdAndDelete(droneId)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Error deleting the drone...", err);
    });
});

module.exports = router;
