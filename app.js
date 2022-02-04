require('dotenv/config');

require('./db');

const express = require('express');
const hbs = require('hbs');

const app = express();

require('./config')(app);

app.locals.appTitle = `Dronilandia`;



const index = require('./routes/index.routes');
app.use('/', index);

const droneRoutes = require('./routes/drones.routes')
app.use('/', droneRoutes)



require('./error-handling')(app);

module.exports = app;
