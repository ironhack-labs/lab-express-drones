const express = require("express");
const router = express.Router();                    //Me da los métodos de express


/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
