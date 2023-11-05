
require('dotenv/config');


require('./db');


const express = require('express');


const hbs = require('hbs');

const app = express();

require('./config')(app);


const index = require('./routes/index');
app.use('/', index);

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
