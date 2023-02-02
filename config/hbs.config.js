module.exports = (app) => {
  app.set("view engine", "hbs");
  app.set("views", `${__dirname}/../views`);
};
