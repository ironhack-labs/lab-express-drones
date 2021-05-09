const express = require('express');
const router = express.Router();
const DroneModel = require("./../models/Drone.model.js");

/* GET home page */
router.get('/', (req, res, next) => 
res.render('index', { title: 'Drnz' }));

module.exports = router;
