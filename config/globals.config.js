const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");

const PORT = 3000;

module.exports = (app) => {
  app.use(logger("dev"));

  app.use(favicon(`${__dirname}/../public/images/favicon.ico`));

  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(`${__dirname}/../public`));

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};
