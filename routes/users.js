const express = require('express')
const router = express.Router()

const user = require('../controllers/user.controller')

router.get('/signup', user.create)
router.post('/users', user.doCreate)
router.get('/login', user.login)

module.exports = router