require('dotenv/config')

require('./db')

const express = require('express')

const hbs = require('hbs')

const app = express()

require('./config')(app)

const projectName = 'Express Drones'

app.locals.title = `${projectName}`

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

const droneRoutes = require('./routes/drones')
app.use('/drones', droneRoutes)

require('./error-handling')(app)

module.exports = app