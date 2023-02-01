// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Create app server
const app = express();

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Serves a custom favicon on each request
// https://www.npmjs.com/package/serve-favicon
const favicon = require("serve-favicon");

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');
// require('dotenv').config();

// ℹ️ Connects to the database
require('./config/db.config');

// ℹ️ Connects to hbs
require('./config/hbs.config');

// Middleware configuration
// In development environment the app logs
app.use(logger("dev"));

// To have access to `body` property in the request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Normalizes the path to the views folder
app.set('views', `${__dirname}/views`)

// Sets the view engine to handlebars
app.set('"view engine"', 'hbs')

// Handles access to the public folder
app.use(express.static(`${__dirname}/public`));

// Handles access to the favicon
app.use(favicon(`${__dirname}/public/images/favicon.ico`));

const router = require('./config/routes.config')
app.use(router)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// this middleware runs whenever requested page is not available
app.use((req, res, next) => {
  res.status(404).render("common/not-found");
});

// whenever you call next(err), this middleware will handle the error
// always logs the error
app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).render("common/error");
  }
});

// ℹ️ Sets the PORT for our app to have access to it.
const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`))