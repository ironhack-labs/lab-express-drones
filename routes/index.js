const express = require("express");
const router = express.Router();
const dronesController = require ('../controllers/drones.controller')
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));



module.exports = router;
