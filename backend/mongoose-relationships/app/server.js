const express= require("express")
require('dotenv').config()
const bodyParser= require("body-parser")
require("./config/db").connect()
const apiRoutes = require("./routes")
const app = express()

const PORT = process.env.PORT
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/api",apiRoutes())

app.listen(PORT,()=>console.log(`App running on port ${PORT}`))