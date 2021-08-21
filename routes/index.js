const express = require("express");
const app = require('../app')
const router = express.Router();
const Drone = require("../models/Drone.model")

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
