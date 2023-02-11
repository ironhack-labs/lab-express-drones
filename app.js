require('dotenv/config');

require('./db');

const express = require('express');

const hbs = require('hbs');

const app = express();

require('./config')(app);

app.locals.title = `🤩 MIS MARAVILLOSOS DRONES 🤩`;

const index = require('./routes/index');
app.use('/', index);

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)

require('./error-handling')(app);

module.exports = app;
