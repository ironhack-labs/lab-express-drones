
const express = require("express")


const logger = require("morgan")


const cookieParser = require("cookie-parser")


const favicon = require("serve-favicon")


const path = require("path")


module.exports = (app) => {

  // use y set son metodos de app, por eso lo hago aqui dentro

  app.use(logger("dev"))

  // To have access to `body` property in the request
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  
  app.set("views", path.join(__dirname, "..", "views"))

  app.set("view engine", "hbs")

  app.use(express.static(path.join(__dirname, "..", "public")))


  app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));
}
