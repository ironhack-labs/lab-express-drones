
const router = require('express').Router()
const miscController = require('../controllers/misc.controller')
const dronesController = require('../controllers/drones.controller')


//MISC
router.get('/', miscController.home)

//DRONES
router.get('/drones/new', dronesController.create)
router.post('/drones', dronesController.doCreate)


router.get('/drones', dronesController.list)
router.get('/drones/:id', dronesController.droneDetail)

router.get('/drones/:id/edit', dronesController.edit)
router.post('/drones/:id', dronesController.doEdit)

router.post('/drones/:id/delete', dronesController.delete)

module.exports = router

