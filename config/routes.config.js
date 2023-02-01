const express = require('express')
const router = express.Router()

const commonController = require('../controllers/common.controller')
const droneController = require('../controllers/drone.controller')

router.get('/', commonController.home)

router.get('/drones', droneController.list)


module.exports = router