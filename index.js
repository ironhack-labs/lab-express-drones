// 1. IMPORTACIONES

const express 		= require("express")
const app			= express()

const hbs			= require("hbs")

const connectDB		= require("./config/db")

require("dotenv").config()


// 2. MIDDLEWARES

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")


// Para transmitir los datos del formulario a la base de datos
app.use(express.urlencoded({ extended: true }))


// 3. RUTEO

// RUTA: TODOS LOS DRONES
app.use("/drones", require("./routes/drones"))





connectDB()


// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Corriendo en el puerto ${process.env.PORT}`)
})

