const express = require("express");
const app = express();

require("./config/globals.config")(app);
require("./config/drones.config")(app);
require("./config/hbs.config")(app);
