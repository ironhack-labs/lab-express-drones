const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

/* GET home page */
router.get("/", (req, res, next) => {
  Drone.find().then((drones) => {
    res.render("index", { drones });
  });
});

module.exports = router;
