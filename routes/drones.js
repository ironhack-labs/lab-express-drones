const express = require('express');
const router = express.Router();
const drones = require("../controllers/drones.controller");

// require the Drone model here

router.get('/drones', drones.list);

router.get('/drones/create', drones.new);
router.post('/drones', drones.create);


router.get('/drones/:id/edit', drones.detail);
router.post('/drones/:id/edit', drones.update);

router.post('/drones/:id/delete', drones.delete);

module.exports = router;
