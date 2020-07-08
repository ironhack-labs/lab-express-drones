const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('index'));


router.get('/new-drone', (req, res) => res.render('/drones/create-form'))


module.exports = router;
