require('dotenv/config')

require('./db')

const express = require('express')

const hbs = require('hbs')

const app = express()

require('./config')(app)

const projectName = 'lab-express-drones'

app.locals.title = `Drones drones drones!!!!!!!!`

const index = require('./routes/index')
app.use('/', index)

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)

require('./error-handling')(app)

module.exports = app
