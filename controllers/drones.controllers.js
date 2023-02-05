const dataBase = require("../config/db.config");
const droneModel = require("../models/drones.model");

module.exports.home = (req, res) => {
  res.render("pages/home");
};

module.exports.list = (req, res) => {
  dataBase.connect(
    droneModel
      .find()
      .then((drones) => {
        res.render("pages/drones/list", { drones });
        dataBase.disconnect();
      })
      .catch((error) => {
        console.log(error);
        dataBase.disconnect();
      })
  );
};

module.exports.create = (req, res) => {
  res.render("pages/drones/create-form");
};

module.exports.doCreate = (req, res) => {
  dataBase.connect(
    droneModel
      .create(req.body)
      .then(() => {
        res.redirect("/drones");
      })
      .catch((error) => {
        console.log(error);
        dataBase.disconnect();
        
        res.render("pages/drones/create-form");
      })
  );
};
