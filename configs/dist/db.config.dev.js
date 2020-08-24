"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-drone-dev', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (x) {
  return console.log("Connected to Mongo! Database name: \"".concat(x.connections[0].name, "\""));
})["catch"](function (err) {
  return console.error('Error connecting to mongo', err);
});