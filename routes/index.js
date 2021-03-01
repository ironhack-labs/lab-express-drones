const express = require('express');
const { listenerCount } = require('../models/drone.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));

module.exports = router;
