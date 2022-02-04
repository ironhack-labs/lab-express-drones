// 1. IMPORTACIONES
const express = require("express")
const app = express()

const hbs = require("hbs")

const connectDB = require("./db/index")

// 2. MIDDLEWARES 
require("dotenv").config()

connectDB()

app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.urlencoded({extended:true}))

// 3. RUTEO
app.use("/", require("./routes/index"))
app.use("/drones", require("./routes/drones"))

// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))