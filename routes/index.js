const express = require('express');
const router = express.Router();
const droneController = require('../controllers/drones.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));
// router.get('/drones', droneController.list);
module.exports = router;
