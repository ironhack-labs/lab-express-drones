
require('dotenv/config');


require('./db');


const express = require('express');


const hbs = require('hbs');

const app = express();


require('./config')(app);


const projectName = 'Drones ';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;


const index = require('./routes/index');
app.use('/', index);

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)


require('./error-handling')(app);

module.exports = app;
