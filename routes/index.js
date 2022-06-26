const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//router.use('/drones', require('./drones.routes'))

module.exports = router;