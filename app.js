// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require('./db/index');

require('dotenv').config();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares

// 2. MIDDLEWARES
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));

connectDB();


/* require('./config')(app); */


// default value for title local
const projectName = 'lab-express-drones';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const droneRoutes = require('./routes/drones')
app.use('/', droneRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;



// 4. SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`Corriendo en el puerto ${process.env.PORT}`);
});
