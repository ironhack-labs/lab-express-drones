const express = require("express");
const router = express.Router();

/* GET HOME PAGES */
router.get("/", (req, res, next) => res.render("index"));

/* GET DRONES PAGES */
// router.use("/drones", (req, res, next) => res.render("drones/list"));

module.exports = router;
