const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  console.log("DRONES");
  Drone.find()
    .then((results) => {
      console.log("These are the results", results);
      res.render("drones/list", { drones: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  Drone.create(req.body)
    .then((results) => {
      console.log("These are the results", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      res.render("drones/create-form", { error: "Error, please try again" });
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((results) => {
      console.log("These are the results", results);
      res.render("drones/update-form", { drone: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((results) => {
      console.log("These are the results", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
      res.render("drones/update-form", { error: "Error, please try again" });
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  console.log("post");
  Drone.findByIdAndDelete(req.params.id)
    .then((results) => {
      console.log("These are the results", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
