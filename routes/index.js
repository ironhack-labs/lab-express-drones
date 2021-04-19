const express = require('express');
const router = express.Router();
const chalk = require('chalk')

const Drone = require('../models/Drone')

/* GET home page */
router.get('/', (req, res, next) => {
    Drone.find()
    .then((result) => {
        console.log(chalk.green.inverse('HOMEPAGE!'))
    })
    .catch((err) => {
        console.log(chalk.red(err))
    })
    res.render('index')
})

module.exports = router;
