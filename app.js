require('dotenv/config');

require('./db');

const express = require('express');

const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-drones';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

hbs.registerPartials(__dirname + "/views/partials");

// 👇 Start handling routes here

const userRouter = require('./routes/users')
app.use('/', userRouter)

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send("Ops, ha sucedido un error");
});


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
