require('dotenv/config');

require('./db');

const express = require('express');

const app = express();

require('./config')(app);

const index = require('./routes/index');
app.use('/', index);

const droneRoutes = require('./routes/drones')
app.use('/drones', droneRoutes)


require('./error-handling')(app);

module.exports = app;
