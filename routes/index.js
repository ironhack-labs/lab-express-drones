const express = require('express');
const routerDrones = require('/routes/drones');
const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));
router.get('/drones', routerDrones);

module.exports = router;
