const express = require("express");
const drones = require("../controllers/drones.controllers");

const routes = express.Router();

routes.get("/", drones.home);
routes.get("/drones", drones.list);

module.exports = (app) => {
  app.use("/", routes);
};
