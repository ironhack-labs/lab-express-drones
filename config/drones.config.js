const express = require("express");
const drones = require("../controllers/drones.controllers");

const routes = express.Router();

routes.get("/", drones.home);
routes.get("/drones", drones.list);
routes.get("/drones/create", drones.create);
routes.post("/drones/create", drones.doCreate);
routes.get("/drones/:id/update", drones.update);
routes.post("/drones/:id/update", drones.doUpdate);
routes.post("/drones/:id/delete", drones.delete);

module.exports = (app) => {
  app.use("/", routes);
};
