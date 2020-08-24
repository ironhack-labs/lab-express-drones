"use strict";

require('dotenv').config();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var express = require('express');

var favicon = require('serve-favicon');

var hbs = require('hbs');

var mongoose = require('mongoose');

var logger = require('morgan');

var path = require('path');

var app_name = require('./package.json').name;

var debug = require('debug')("".concat(app_name, ":").concat(path.basename(__filename).split('.')[0]));

var app = express(); // require database configuration

require('./configs/db.config'); // Middleware Setup


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser()); // Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express["static"](path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico'))); // default value for title local

app.locals.title = 'Express - Generated with IronGenerator';

var index = require('./routes/index');

app.use('/', index);

var droneRoutes = require('./routes/drones');

app.use('/', droneRoutes);
app.listen(3000, function () {
  return console.log('My first app listening on port 3000!');
});
module.exports = app;