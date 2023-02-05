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
      })
      .catch((error) => {
        console.log(error);
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

        res.render("pages/drones/create-form");
      })
  );
};

module.exports.update = (req, res) => {
  dataBase.connect(
    droneModel
      .findById(req.params.id)
      .then((drone) => {
        res.render("pages/drones/update-form", { drone });
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

module.exports.doUpdate = (req, res) => {
  dataBase.connect(
    droneModel
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/drones");
      })
      .catch((error) => {
        console.log(error);

        res.render("pages/drones/create-form");
      })
  );
};

module.exports.delete = (req, res) => {
  dataBase.connect(
    droneModel
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/drones");
      })
      .catch((error) => {
        console.log(error);
      })
  );
};
