const mongoose = require("mongoose");
const express = require("express");
const Drone = require("../models/Drone.model");
const router = require("express").Router();
const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1/lab-express-drones" ||
  "mongodb://localhost:27017/lab-express-drones";

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((dronesFromDB) => {
      console.log("retrieved the drones from database", dronesFromDB);
      res.render("drones/list", { drones: dronesFromDB });
    })
    .catch((error) => {
      console.log("error getting drones from db", error);
    });
});

router.get("/drones/create", (req, res, next) =>
  res.render("drones/create-form")
);

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Drone.findById(id)
    .then((drone) => {
      res.render("drones/update-form", { drone: drone });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  const newDetails = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.findByIdAndUpdate(id, newDetails)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => res.redirect("/drones"))
    .catch((error) => next(error));
});

module.exports = router;
