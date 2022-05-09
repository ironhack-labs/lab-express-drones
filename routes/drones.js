const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/create", (req, res, next) => {
  const { name, propellers, maxSpeed, price, rating } = req.body;
  Drone.create({ name, propellers, maxSpeed, price, rating })
    .then(() => {
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/create`);
    });
});

router.get("/edit/:id", (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((result) => {
      res.render("drones/update-form", result);
    })
    .catch((err) => next(err));
});

router.post("/edit/:id", (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed, price, rating } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed, price, rating })
    .then(() => {
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/edit/${id}`);
    });
});

router.post("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then(() => {
      res.redirect(`/`);
    })
    .catch((err) => next(err));
});

module.exports = router;
