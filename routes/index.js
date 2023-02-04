const express = require("express");
const router = express.Router();
const common = require('../controllers/common.controller')

/* GET home page */
router.get("/", common.home);

module.exports = router;
