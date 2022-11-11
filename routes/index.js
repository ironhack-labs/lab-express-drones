const express = require("express");
const router = express.Router();
// const Drone = require('../models/Drone.model');

router.get("/", (req, res, next) => res.render("index"));


module.exports = router;
