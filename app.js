//Requerimos express,handlebars y morgan
//require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const logger = require('morgan')
const routes = require('./config/routes')
//const path = require('path')
const createError = require('http-errors')
//Conexion con la BD
require('./config/db.config')
///Instanciamos express
const app = express()
     //default value for title local
const projectName = 'lab-express-drones';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

//Exponer archivos estaticos
app.use(express.static('public'))
app.use(logger('dev'))
//Configuramos handlebars (¡OJO! dirname tiene delante 2 barras bajas __)
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
//Requerimos los partials
hbs.registerPartials(__dirname + '/views')
//Le decimos a express que se quede con la rutas
app.use('/', routes)
//Error handler
app.use((req, res, next) => {
    next(createError(404))
})
app.use((error, req, res, next) => {
    console.log(error)
    if (!error.status) {
        error = createError(500)
    }
    res.status(error.status)
    res.render("error", error)
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});
// ℹ️ This function is getting exported from the config folder. It runs most middlewares
//require('./config')(app);

