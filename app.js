require('dotenv/config');

require('./db');

const express = require('express');

const app = express();

require('./config')(app);


app.locals.appTitle = `IronDrones`;

// ENRUTADOS

// index routes
const index = require('./routes/index.routes');
app.use('/', index);

// drones routes
const droneRoutes = require('./routes/drones.routes')
app.use('/', droneRoutes)



// ERROR HANDLING
require('./error-handling')(app);

module.exports = app;
