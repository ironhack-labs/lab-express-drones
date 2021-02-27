const express = require('express');
const router = express.Router();
const Drone = require("./../models/Drone.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

//     // Drone.find()
//     // .then(drones => res.render('index', { list: drones }))
//     // .catch(error => console.log(error))


// });

module.exports = router;
