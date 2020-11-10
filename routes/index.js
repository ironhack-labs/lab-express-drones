const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Welcome to the Drones Project' }));

module.exports = router;
