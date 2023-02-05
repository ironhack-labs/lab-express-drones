const express = require('express');

const users = require('../controllers/users.controller')

const router = express.Router();

router.get('/users/new', users.create);
router.post('/users', users.doCreate);

router.get('/login', users.login );
router.post('/login', users.doLogin);





module.exports = router

