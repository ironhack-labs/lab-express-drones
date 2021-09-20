const express = require("express");
const router = express.Router();


const droneController    = require("./../controllers/droneController")

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));





module.exports = router;
